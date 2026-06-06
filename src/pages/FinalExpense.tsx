import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import usePageMeta from "@/hooks/usePageMeta";

const FinalExpense = () => {
  const location = useLocation();

  usePageMeta({
    title: "Final Expense Insurance",
    description: "Final expense and guaranteed issue whole life insurance. Help protect your family from end-of-life costs with licensed agent guidance.",
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="page-wrapper">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/30 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
            </div>
          </div>

          <div className="container relative py-16 md:py-20">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Final Expense Insurance
              </h1>
              <p className="mt-3 text-lg text-primary-200">
                Help protect your family from end-of-life costs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-sm">
          <div className="container">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-text mb-4">Overview</h2>
              <p className="text-muted leading-relaxed">
                Final expense insurance, sometimes called burial insurance, is designed to cover funeral costs, outstanding debts, and other expenses that can burden your family. These policies typically offer smaller benefit amounts with simplified qualification requirements, making them accessible for many individuals regardless of health status.
              </p>
              
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link to="/contact#request" className="btn-primary">
                  Request Information
                </Link>
                <a href="tel:3136517596" className="btn-outline">
                  Call (313) 651-7596
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Level Benefit Section */}
        <section id="level-benefit" className="section-sm bg-muted-surface scroll-mt-20">
          <div className="container">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-text mb-4">
                Final Expense — Level Benefit Whole Life
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    May offer level benefits when health qualifies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Eligibility and pricing vary by carrier and state.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Policy terms, exclusions, and limitations apply.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Guaranteed Issue Section */}
        <section id="guaranteed-issue" className="section-sm scroll-mt-20">
          <div className="container">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-text mb-4">
                Final Expense — Guaranteed Issue
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Designed for applicants who may not qualify for other final expense options.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Benefit structures and waiting periods vary by carrier.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Policy terms, exclusions, and limitations apply.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Request Form */}
        <section className="section bg-bg/50" id="request">
          <div className="container max-w-2xl">
            <RequestForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinalExpense;
