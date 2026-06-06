import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MidPageCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary-950">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">
            Discover Whether Your Coverage Is the Right Fit
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            A brief review of your current situation can help determine if your coverage and benefits are properly aligned with your needs and goals.
          </p>
          <Link
            to="/review"
            className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-primary-950 font-semibold text-base hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 shadow-lg"
          >
            Request a Personalized Benefits Review
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;
