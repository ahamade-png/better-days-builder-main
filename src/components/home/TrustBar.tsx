import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustPoints = [
  "Needs-based recommendations — not product-driven sales",
  "Access to multiple carriers for proper comparison",
  "Focus on long-term affordability and sustainability",
  "Ongoing support and policy reviews as your needs change",
];

const TrustBar = () => {
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
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center mb-8">
            Why Families Trust Us
          </h2>
          <ul className="space-y-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-text font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
