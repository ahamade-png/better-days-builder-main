import { FormEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { isBookOfBusinessAuthenticated } from "@/lib/bookOfBusinessAuth";

const BookOfBusinessSettings = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const authenticated = await isBookOfBusinessAuthenticated();
      setIsAuthenticated(authenticated);
      setCheckingSession(false);
    };

    void checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session));
      setCheckingSession(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setSubmitting(false);
      setError(updateError.message);
      return;
    }

    setSubmitting(false);
    setPassword("");
    setConfirmPassword("");
    setMessage("Password updated successfully.");
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
          <div className="container max-w-xl">
            <div className="mb-4">
              <button
                type="button"
                onClick={() => navigate("/book-of-business")}
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-text bg-surface border border-border rounded-full hover:bg-muted transition-all duration-200"
              >
                Back to Book of Business
              </button>
            </div>

            <div className="card p-6 md:p-8">
              <h1 className="text-2xl font-semibold text-text">Settings</h1>
              <p className="mt-2 text-sm text-muted">Update your Book of Business password.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-text mb-1" htmlFor="bob-settings-password">
                    New Password
                  </label>
                  <input
                    id="bob-settings-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-text mb-1"
                    htmlFor="bob-settings-password-confirm"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="bob-settings-password-confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                    autoComplete="new-password"
                    required
                  />
                </div>

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                {message ? (
                  <p className="text-sm text-green-700" role="status">
                    {message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center h-11 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
                >
                  {submitting ? "Saving Password..." : "Update Password"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookOfBusinessSettings;