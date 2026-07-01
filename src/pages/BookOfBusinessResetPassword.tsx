import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const BookOfBusinessResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [canResetPassword, setCanResetPassword] = useState(false);
  const [linkInvalid, setLinkInvalid] = useState(false);

  const hasRecoveryHash = useMemo(() => {
    const hash = window.location.hash;
    return hash.includes("type=recovery") || hash.includes("access_token=");
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setCanResetPassword(true);
        setCheckingSession(false);
        return;
      }

      if (!hasRecoveryHash) {
        setCheckingSession(false);
        setLinkInvalid(true);
        return;
      }

      // Give Supabase a short window to exchange hash tokens into a session.
      timeoutId = setTimeout(async () => {
        const {
          data: { session: delayedSession },
        } = await supabase.auth.getSession();

        if (delayedSession) {
          setCanResetPassword(true);
          setLinkInvalid(false);
        } else {
          setCanResetPassword(false);
          setLinkInvalid(true);
        }

        setCheckingSession(false);
      }, 1500);
    };

    void checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || Boolean(session)) {
        setCanResetPassword(true);
        setLinkInvalid(false);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setCheckingSession(false);
    });

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      subscription.unsubscribe();
    };
  }, [hasRecoveryHash]);

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
    setMessage("Password created. Redirecting to login...");

    window.setTimeout(() => {
      navigate("/book-of-business/login?passwordSet=1", { replace: true });
    }, 1200);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="flex-1 bg-bg">
        <section className="section-sm">
          <div className="container max-w-md">
            <div className="card p-6 md:p-8">
              <h1 className="text-2xl font-semibold text-text">Create Book of Business Password</h1>
              <p className="mt-2 text-sm text-muted">
                Use this one-time link to set your password, then log in normally.
              </p>

              {checkingSession ? (
                <p className="mt-6 text-sm text-muted">Checking secure reset link...</p>
              ) : null}

              {!checkingSession && !canResetPassword ? (
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-red-600" role="alert">
                    {linkInvalid
                      ? "This reset link is invalid or expired."
                      : "A valid password reset session was not found."}
                  </p>
                  <Link
                    to="/book-of-business/login"
                    className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-[0_10px_24px_rgba(31,79,216,0.28)] hover:bg-primary-700 transition-all duration-200"
                  >
                    Back to Login
                  </Link>
                </div>
              ) : null}

              {!checkingSession && canResetPassword ? (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1" htmlFor="bob-reset-password">
                      New Password
                    </label>
                    <input
                      id="bob-reset-password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                      autoComplete="new-password"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1" htmlFor="bob-reset-password-confirm">
                      Confirm New Password
                    </label>
                    <input
                      id="bob-reset-password-confirm"
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
                    {submitting ? "Saving Password..." : "Create Password"}
                  </button>
                </form>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookOfBusinessResetPassword;
