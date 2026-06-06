import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const SpecializedPlacement = () => {
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
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50">
              <Shield className="w-7 h-7 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center mb-6">
            Specialized in Proper Coverage Placement
          </h2>
          <div className="text-lg text-muted leading-relaxed space-y-4">
            <p>
              We focus on proper placement — not just policy selection.
            </p>
            <p>
              Every recommendation is based on your individual situation, including your financial obligations, health profile, and long‑term objectives. Our process is designed to help ensure the coverage you choose is not only approved, but appropriate and sustainable.
            </p>
            <p>
              For individuals who may have health concerns or believe they are difficult to insure, there are options available — including simplified issue and guaranteed issue policies — designed to provide coverage solutions based on your situation.
            </p>
            <p>
              This approach helps reduce the risk of being underinsured, overinsured, or placed into a plan that may not perform as expected over time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializedPlacement;
