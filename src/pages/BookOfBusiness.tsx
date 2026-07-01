import { FormEvent, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  isBookOfBusinessAuthenticated,
  logoutBookOfBusiness,
} from "@/lib/bookOfBusinessAuth";
import {
  createBookOfBusinessClient,
  deleteBookOfBusinessClient,
  listBookOfBusinessClients,
  updateBookOfBusinessClient,
} from "@/lib/bookOfBusinessApi";
import {
  BookOfBusinessClient,
  BookOfBusinessClientInput,
  defaultBookOfBusinessClientInput,
} from "@/types/bookOfBusiness";

const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000;

const BookOfBusiness = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<BookOfBusinessClient[]>([]);
  const [form, setForm] = useState<BookOfBusinessClientInput>(
    defaultBookOfBusinessClientInput,
  );
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name-asc" | "name-desc">("newest");
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingClients, setLoadingClients] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const authenticated = await isBookOfBusinessAuthenticated();
      setIsAuthenticated(authenticated);
      setCheckingSession(false);
    };

    void checkSession();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const loadClients = async () => {
      setLoadingClients(true);
      setErrorMessage("");

      try {
        const data = await listBookOfBusinessClients();
        setClients(data);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Failed to load clients.");
      } finally {
        setLoadingClients(false);
      }
    };

    void loadClients();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const triggerAutoLogout = () => {
      void (async () => {
        await logoutBookOfBusiness();
        navigate("/book-of-business/login?timeout=1", { replace: true });
      })();
    };

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(triggerAutoLogout, INACTIVITY_TIMEOUT_MS);
    };

    const activityEvents: Array<keyof WindowEventMap> = [
      "click",
      "keydown",
      "mousemove",
      "scroll",
      "touchstart",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, resetTimeout, { passive: true });
    });

    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, resetTimeout);
      });
    };
  }, [isAuthenticated, navigate]);

  const filteredClients = useMemo(() => {
    const term = search.trim().toLowerCase();
    const filtered = clients.filter((client) => {
      const matchesSearch =
        term.length === 0 ||
        [client.full_name, client.email ?? "", client.phone ?? "", client.state ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(term);

      const matchesStatus = statusFilter === "all" || client.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return [...filtered].sort((left, right) => {
      if (sortBy === "oldest") {
        return new Date(left.created_at).getTime() - new Date(right.created_at).getTime();
      }

      if (sortBy === "name-asc") {
        return left.full_name.localeCompare(right.full_name);
      }

      if (sortBy === "name-desc") {
        return right.full_name.localeCompare(left.full_name);
      }

      return new Date(right.created_at).getTime() - new Date(left.created_at).getTime();
    });
  }, [clients, search, sortBy, statusFilter]);

  const setFormField = (field: keyof BookOfBusinessClientInput, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const fillFormFromClient = (client: BookOfBusinessClient) => {
    setEditingClientId(client.id);
    setForm({
      full_name: client.full_name,
      status: client.status,
      cs_needed: client.cs_needed,
      email: client.email ?? "",
      phone: client.phone ?? "",
      state: client.state ?? "",
      lead_type: client.lead_type ?? "",
      lead_quality: client.lead_quality ?? "",
      referral_affiliate: client.referral_affiliate ?? "",
      why_reason: client.why_reason ?? "",
      notes: client.notes ?? "",
      date_of_birth: client.date_of_birth ?? "",
      home_street: client.home_street ?? "",
      home_city: client.home_city ?? "",
      home_zip: client.home_zip ?? "",
    });
    setIsFormOpen(true);
  };

  const openCreateForm = () => {
    setEditingClientId(null);
    setForm(defaultBookOfBusinessClientInput);
    setErrorMessage("");
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const resetFormState = () => {
    setEditingClientId(null);
    setForm(defaultBookOfBusinessClientInput);
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setErrorMessage("");

      if (editingClientId) {
        const updatedClient = await updateBookOfBusinessClient(editingClientId, form);
        setClients((previous) =>
          previous.map((entry) => (entry.id === editingClientId ? updatedClient : entry)),
        );
      } else {
        const createdClient = await createBookOfBusinessClient(form);
        setClients((previous) => [createdClient, ...previous]);
      }

      setIsFormOpen(false);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to save client.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (clientId: string) => {
    const client = clients.find((entry) => entry.id === clientId);
    if (!window.confirm(`Delete ${client?.full_name ?? "this client"}?`)) {
      return;
    }

    try {
      setErrorMessage("");
      await deleteBookOfBusinessClient(clientId);
      setClients((previous) => previous.filter((entry) => entry.id !== clientId));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to delete client.");
    }
  };

  const handleLogout = async () => {
    await logoutBookOfBusiness();
    navigate("/book-of-business/login", { replace: true });
  };

  if (!checkingSession && !isAuthenticated) {
    return <Navigate to="/book-of-business/login" replace />;
  }

  if (checkingSession) {
    return (
      <div className="page-wrapper">
        <Header />
        <main className="flex-1 bg-bg">
          <section className="section-sm">
            <div className="container">
              <div className="card p-6 text-sm text-muted">Checking Book of Business access...</div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Header />
      <main className="flex-1 bg-bg">
        <section className="section-sm">
          <div className="container">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
              <div>
                <h1 className="text-3xl font-semibold text-text">Book of Business</h1>
                <p className="text-sm text-muted mt-1">Client information fields only.</p>
                <p className="text-xs text-muted mt-1">Data is saved to your secure Book of Business account.</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
              >
                Log Out
              </button>
            </div>

            <div className="card p-5 md:p-6 mb-6">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <h2 className="text-lg font-semibold text-text">Add Client</h2>
                  <p className="text-sm text-muted">Open the floating card to create or update a client.</p>
                </div>
                <button
                  type="button"
                  onClick={openCreateForm}
                  className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
                >
                  Add Client
                </button>
              </div>
            </div>

            <div className="card p-5 md:p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h2 className="text-lg font-semibold text-text">Clients</h2>
                <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name, email, phone, state"
                    className="w-full min-w-[260px] rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                  />
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                  >
                    <option value="all">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={(event) =>
                      setSortBy(event.target.value as "newest" | "oldest" | "name-asc" | "name-desc")
                    }
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                  </select>
                </div>
              </div>

              {loadingClients ? <p className="mb-4 text-sm text-muted">Loading clients...</p> : null}

              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted">
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Status</th>
                      <th className="py-2 pr-4">Email</th>
                      <th className="py-2 pr-4">Phone</th>
                      <th className="py-2 pr-4">State</th>
                      <th className="py-2 pr-4">Lead Type</th>
                      <th className="py-2 pr-4">DOB</th>
                      <th className="py-2 pr-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <tr key={client.id} className="border-b border-border/70 last:border-0">
                        <td className="py-3 pr-4 text-text">{client.full_name}</td>
                        <td className="py-3 pr-4 text-muted">{client.status}</td>
                        <td className="py-3 pr-4 text-muted">{client.email || "-"}</td>
                        <td className="py-3 pr-4 text-muted">{client.phone || "-"}</td>
                        <td className="py-3 pr-4 text-muted">{client.state || "-"}</td>
                        <td className="py-3 pr-4 text-muted">{client.lead_type || "-"}</td>
                        <td className="py-3 pr-4 text-muted">{client.date_of_birth || "-"}</td>
                        <td className="py-3 pr-4">
                          <button
                            type="button"
                            onClick={() => fillFormFromClient(client)}
                            className="text-sm font-medium text-primary-600 hover:text-primary-700"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(client.id)}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredClients.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-muted">
                          No clients yet.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Dialog
        open={isFormOpen}
        onOpenChange={(open) => {
          if (!open) {
            resetFormState();
          }

          setIsFormOpen(open);
        }}
      >
        <DialogContent className="max-w-5xl w-[min(96vw,72rem)] max-h-[90vh] overflow-y-auto border-border bg-surface text-text">
          <DialogHeader className="space-y-1">
            <DialogTitle>{editingClientId ? "Edit Client" : "Add Client"}</DialogTitle>
            <DialogDescription className="text-muted">
              Fill in client information and save changes.
            </DialogDescription>
          </DialogHeader>

          {errorMessage ? (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Field label="Full Name" value={form.full_name} onChange={(value) => setFormField("full_name", value)} required />
              <SelectField
                label="Status"
                value={form.status}
                onChange={(value) => setFormField("status", value)}
                options={["active", "pending", "inactive"]}
              />
              <SelectField
                label="CS Needed"
                value={form.cs_needed}
                onChange={(value) => setFormField("cs_needed", value)}
                options={["no", "yes"]}
              />
              <Field label="Email" value={form.email} onChange={(value) => setFormField("email", value)} type="email" />
              <Field label="Phone" value={form.phone} onChange={(value) => setFormField("phone", value)} type="tel" />
              <Field label="State" value={form.state} onChange={(value) => setFormField("state", value)} />
              <Field label="Lead Type" value={form.lead_type} onChange={(value) => setFormField("lead_type", value)} />
              <Field label="Lead Quality" value={form.lead_quality} onChange={(value) => setFormField("lead_quality", value)} />
              <Field
                label="Referral Affiliate"
                value={form.referral_affiliate}
                onChange={(value) => setFormField("referral_affiliate", value)}
              />
              <Field label="Why Reason" value={form.why_reason} onChange={(value) => setFormField("why_reason", value)} />
              <Field
                label="Date of Birth"
                value={form.date_of_birth}
                onChange={(value) => setFormField("date_of_birth", value)}
                type="date"
              />
              <Field label="Home Street" value={form.home_street} onChange={(value) => setFormField("home_street", value)} />
              <Field label="Home City" value={form.home_city} onChange={(value) => setFormField("home_city", value)} />
              <Field label="Home ZIP" value={form.home_zip} onChange={(value) => setFormField("home_zip", value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">Notes</label>
              <textarea
                value={form.notes}
                onChange={(event) => setFormField("notes", event.target.value)}
                className="w-full min-h-24 rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
              >
                {submitting ? "Saving..." : editingClientId ? "Update Client" : "Save Client"}
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-muted rounded-full border border-border hover:text-text"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

interface FieldProps {
  label: string;
  value: string;
  type?: "text" | "date" | "email" | "tel";
  required?: boolean;
  onChange: (value: string) => void;
}

const Field = ({ label, value, type = "text", required, onChange }: FieldProps) => (
  <div>
    <label className="block text-sm font-medium text-text mb-1">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const SelectField = ({ label, value, options, onChange }: SelectFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-text mb-1">{label}</label>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BookOfBusiness;
