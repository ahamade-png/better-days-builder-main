import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/ali-buildingbetterdaysinsurance/insurance-coverage-consultation";

interface ScheduleConsultationProps {
  embed?: boolean;
}

const ScheduleConsultation = ({ embed = false }: ScheduleConsultationProps) => {
  return (
    <section className="section bg-surface" id="schedule">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-4">
            Schedule a Free Insurance Coverage Consultation
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Pick a time that works for you. We'll review your coverage options and help you understand what may fit your age, health, budget, and goals.
          </p>

          {!embed && (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-200 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Schedule My Consultation
            </a>
          )}

          <p className="mt-6 text-xs text-muted/70 max-w-xl mx-auto">
            Coverage options vary by state, age, health, carrier availability, and underwriting guidelines. No obligation.
          </p>
        </motion.div>

        {embed && (
          <motion.div
            className="max-w-4xl mx-auto mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden border border-border bg-bg shadow-md">
              <iframe
                src={CALENDLY_URL}
                title="Schedule a Free Insurance Coverage Consultation"
                loading="lazy"
                className="w-full"
                style={{ minHeight: 720, border: 0 }}
              />
            </div>
            <div className="text-center mt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 underline-offset-4 hover:underline"
              >
                <Calendar className="w-4 h-4" />
                Schedule My Consultation
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ScheduleConsultation;
