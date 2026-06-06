import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ExperienceMatters = () => {
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
            <Award className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-5">
            Experience Matters
          </h2>
          <div className="text-lg text-muted leading-relaxed space-y-4">
            <p>
              Working with a knowledgeable, committed advisor can make a meaningful difference in ensuring your coverage is structured properly and reviewed over time.
            </p>
            <p>
              We focus on long‑term client relationships, ongoing reviews, and making sure your coverage continues to fit as your life evolves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceMatters;
