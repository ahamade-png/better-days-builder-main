import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const suitabilityPoints = [
  "Confirm your coverage levels are appropriate for your family's current needs",
  "Identify whether your benefits align with your financial goals",
  "Ensure your plan remains sustainable and properly structured over time",
];

const FamilyFirstStatement = () => {
  return (
    <>
      {/* Suitability Section */}
      <section className="py-16 md:py-20 bg-muted-surface">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center mb-6">
              Suitability Comes First
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed text-center mb-8">
              Our approach focuses on aligning your coverage with your individual needs, financial responsibilities, and long‑term goals — ensuring your benefits remain appropriate, balanced, and sustainable over time.
            </p>
            <ul className="space-y-4">
              {suitabilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-text">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-primary-950">
        <div className="container">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-medium">Licensed &amp; Appointed</span>
            <span className="text-white/30">|</span>
            <span className="font-medium">Serving Thousands of Clients and Families</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 font-medium">
              Client-Rated
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FamilyFirstStatement;
