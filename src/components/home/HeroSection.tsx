import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-bg overflow-hidden">
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center pt-16 pb-8 md:pt-24 md:pb-12">
          {/* Brand Authority */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[13px] font-bold tracking-[0.15em] uppercase text-text">
              National Benefits Services Center
            </p>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted mt-1">
              A DBA of Building Better Days LLC — Licensed &amp; Appointed
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-extrabold text-text tracking-tight max-w-4xl"
            style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Right Coverage. The Right Benefits. Built for Your Family.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-muted max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.8vw, 19px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We provide personalized insurance guidance designed to help protect your family, support your financial goals, and ensure your coverage remains appropriate and sustainable over time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/review"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-200 shadow-lg"
            >
              Request a Personalized Benefits Review
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/resources"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-surface text-text font-semibold text-base border border-border hover:bg-muted-surface focus:outline-none focus:ring-4 focus:ring-border transition-all duration-200"
            >
              Explore Coverage Options
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Micro Trust Line */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-primary-600">✔</span> No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary-600">✔</span> Takes only minutes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary-600">✔</span> Licensed &amp; appointed
            </span>
          </motion.div>

          {/* Compliance */}
          <motion.p
            className="mt-4 text-xs text-muted/70 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            By clicking "Request a Personalized Benefits Review", you agree to be contacted by National Benefits Services Center via phone, SMS, and email. Message and data rates may apply.{" "}
            <Link to="/privacy" className="underline hover:text-primary-600">
              See Privacy Policy
            </Link>
            .
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative mx-auto max-w-5xl pb-16 md:pb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <img
              src={heroFamily}
              alt="A family reviewing financial documents together in a bright, modern home"
              className="w-full h-auto object-cover"
              width={1920}
              height={960}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
