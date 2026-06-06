import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const MoreOptions = () => {
  return (
    <section className="py-16 md:py-20 bg-muted-surface">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-6">
            <Layers className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
            More Options. More Flexibility.
          </h2>
          <div className="text-lg text-muted leading-relaxed space-y-4 text-left">
            <p>
              Our access to a wide range of carriers allows us to go beyond standard solutions.
            </p>
            <p>
              We work with companies that offer different underwriting approaches, product structures, and organizational models — including mutual companies, not-for-profit organizations, and carriers with specialized programs designed for different client needs.
            </p>
            <p>
              This flexibility helps us better match coverage to your situation rather than forcing a one size fits all solution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreOptions;
