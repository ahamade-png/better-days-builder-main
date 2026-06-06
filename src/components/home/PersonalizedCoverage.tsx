import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const bullets = [
  "Many applicants may qualify for immediate (day one) coverage depending on eligibility",
  "Some plans offer simplified underwriting with limited health questions",
  "Guaranteed issue options may be available for individuals with significant health concerns",
];

const PersonalizedCoverage = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-6">
              <Shield className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-5">
              Personalized Coverage. Properly Structured.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We focus on structuring coverage based on your real-life situation — not a one size fits all approach.
            </p>
          </div>

          <p className="text-muted leading-relaxed mb-6 text-center">
            Every recommendation is based on your financial obligations, health profile, and long-term objectives. Our goal is to ensure your coverage is not just approved, but appropriate and designed to perform when your family needs it most.
          </p>

          <ul className="space-y-3 mb-8">
            {bullets.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="text-primary-600 mt-0.5 flex-shrink-0">•</span>
                <span className="text-text">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted leading-relaxed text-center italic">
            We help you understand your options and determine which type of coverage is truly the right fit for your situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedCoverage;
