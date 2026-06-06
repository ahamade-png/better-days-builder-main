import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    need: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizePhone = (value: string) => value.replace(/[^\d]/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      setError("Please enter your full name.");
      return;
    }
    if (trimmedName.length > 100) {
      setError("Name must be less than 100 characters.");
      return;
    }

    const trimmedEmail = formData.email.trim();
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    const phone = normalizePhone(formData.phone);
    if (phone && (phone.length < 10 || phone.length > 11)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (formData.need.length > 2000) {
      setError("Message must be less than 2000 characters.");
      return;
    }

    setSubmitting(true);

    const payload = {
      full_name: trimmedName,
      email: trimmedEmail,
      phone: phone ? `+1${phone}` : "",
      need: formData.need.trim(),
      page: typeof window !== "undefined" ? window.location.href : "",
      source: "nbsc-website",
      submitted_at: new Date().toISOString(),
    };

    try {
      // Submit through the edge function so lead routing is centralized.
      const { error: fnError } = await supabase.functions.invoke("submit-lead", {
        body: payload,
      });

      if (fnError) {
        throw new Error(fnError.message || "Submission failed.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", need: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again or call us at (313) 651-7596.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 xl:gap-12" id="request">
      {/* Context panel */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
          Request a Personalized Benefits Review
        </h2>
        <p className="mt-4 text-lg text-muted leading-7">
          Share your information and our team will review your current situation to help determine whether your coverage and benefits are properly aligned with your needs.
        </p>
        
        <div className="mt-8 p-6 bg-muted-surface rounded-xl border border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-700" />
            </div>
            <div>
              <p className="text-sm text-muted">Prefer to call?</p>
              <a href="tel:3136517596" className="text-lg font-semibold text-text hover:text-primary-700 transition-colors">
                (313) 651-7596
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="card p-6 md:p-8">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Full name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="label">Email (optional)</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={255}
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="phone" className="label">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(313) 555-0123"
              className="input-field"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="need" className="label">What can we help you with?</label>
            <textarea
              id="need"
              name="need"
              placeholder="Describe your coverage needs or questions..."
              maxLength={2000}
              className="textarea-field"
              value={formData.need}
              onChange={(e) => setFormData({ ...formData, need: e.target.value })}
            />
          </div>

          <p className="text-sm text-muted mt-5 leading-relaxed">
            By submitting, I agree to be contacted by National Benefits Services Center LLC via call, email, and text for insurance services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary. <Link to="/privacy" className="link">Privacy Policy</Link> &amp; <Link to="/terms" className="link">Terms of Service</Link>.
          </p>

          <AnimatePresence>
            {error && (
              <motion.div
                className="mt-4 p-4 rounded-lg border border-danger/30 bg-danger/5 text-sm text-danger"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 flex gap-4 flex-wrap">
            <button
              type="submit"
              className="btn-primary"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Request My Benefits Review"
              )}
            </button>
            <a href="tel:3136517596" className="btn-outline">
              Call (313) 651-7596
            </a>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="success-box"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Your request has been received. If you opted into text messages, you may receive a confirmation request to verify your consent.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
