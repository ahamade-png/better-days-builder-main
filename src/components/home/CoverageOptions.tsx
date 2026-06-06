import { motion } from "framer-motion";
import { FileCheck } from "lucide-react";

const options = [
  "Many applicants may qualify for immediate (day one) coverage with no waiting period",
  "Some plans offer simplified underwriting with limited health questions",
  "Guaranteed issue policies may be available for those with significant health concerns, where acceptance is not based on medical underwriting",
];

const CoverageOptions = () => {
  return (
    <section className="py-16 md:py-20 bg-muted-surface">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50">
              <FileCheck className="w-7 h-7 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center mb-6">
            Coverage Options Based on Your Situation
          </h2>
          <p className="text-lg text-muted leading-relaxed text-center mb-8">
            Different policies are designed for different needs and health profiles.
          </p>
          <ul className="space-y-4 mb-8">
            {options.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-600" />
                <span className="text-text leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted leading-relaxed text-center mb-6">
            We help you understand your options and determine which type of coverage is appropriate for your situation.
          </p>
          <p className="text-xs text-muted/70 text-center">
            Availability, benefits, and waiting periods vary by carrier and underwriting eligibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoverageOptions;
