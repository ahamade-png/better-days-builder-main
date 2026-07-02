import { FormEvent, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  isBookOfBusinessAuthenticated,
  loginBookOfBusiness,
} from "@/lib/bookOfBusinessAuth";
import { supabase } from "@/integrations/supabase/client";

const BookOfBusinessLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
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

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setSuccess("");

    if (query.get("timeout") === "1") {
      setError("Your session expired after 30 minutes. Please log in again.");
      return;
    }

    if (query.get("passwordSet") === "1") {
      setError("");
      setSuccess("Password created successfully. Please log in.");
    }
  }, [location.search]);

  if (!checkingSession && isAuthenticated) {
    return <Navigate to="/book-of-business" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    setSubmitting(true);

    const result = await loginBookOfBusiness(email, password);
    if (!result.ok) {
      setSubmitting(false);
      setError(result.error ?? "Incorrect login. Please try again.");
      return;
    }

    setSubmitting(false);
    setError("");
    navigate("/book-of-business", { replace: true });
  };

  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Enter your email address first, then try again.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setResettingPassword(true);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(trimmedEmail, {
      redirectTo: `${window.location.origin}/book-of-business/reset-password`,
    });

    if (resetError) {
      setResettingPassword(false);
      setError(resetError.message);
      return;
    }

    setResettingPassword(false);
    setSuccess("Password reset email sent. Check your inbox for the recovery link.");
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="flex-1 bg-bg">
        <section className="section-sm">
          <div className="container max-w-md">
            <div className="card p-6 md:p-8">
              <h1 className="text-2xl font-semibold text-text">Book of Business Login</h1>
              <p className="mt-2 text-sm text-muted">
                Enter your account credentials to access your Book of Business. Accounts are invite-only.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label className="block text-sm font-medium text-text mb-1" htmlFor="bob-email">
                    Email
                  </label>
                  <input
                    id="bob-email"
                    name="book-of-business-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                    autoComplete="off"
                    spellCheck={false}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1" htmlFor="bob-password">
                    Password
                  </label>
                  <input
                    id="bob-password"
                    name="book-of-business-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={resettingPassword}
                    className="font-medium text-primary-700 hover:text-primary-800 disabled:opacity-60"
                  >
                    {resettingPassword ? "Sending reset email..." : "Forgot password?"}
                  </button>
                  <span className="text-muted">We’ll email a secure reset link.</span>
                </div>

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                {success ? (
                  <p className="text-sm text-green-700" role="status">
                    {success}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center h-11 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
                >
                  {submitting ? "Logging In..." : "Log In"}
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

export default BookOfBusinessLogin;
