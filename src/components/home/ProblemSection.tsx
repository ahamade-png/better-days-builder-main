import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-6">
            <AlertCircle className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-5">
            Many Families May Be Overpaying or Underprotected
          </h2>
          <div className="text-lg md:text-xl text-muted leading-relaxed space-y-4 text-left md:text-center">
            <p>
              Insurance is not one size fits all. Many individuals are placed into policies that do not fully align with their needs, budget, or long‑term goals — which can lead to gaps in protection or unnecessary costs.
            </p>
            <p>
              Some people also believe life insurance requires a waiting period before benefits are available. In reality, many policies offer immediate (day&nbsp;one) coverage when eligibility requirements are met.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
