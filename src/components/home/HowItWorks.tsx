import { motion } from "framer-motion";
import { MessageSquare, FileSearch, CheckCircle, Settings } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Discovery",
    description: "We review your situation, obligations, and goals.",
  },
  {
    icon: FileSearch,
    step: "2",
    title: "Suitability Review",
    description: "We identify gaps, overlaps, and misaligned coverage.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Recommendations",
    description: "We present options that actually fit your needs.",
  },
  {
    icon: Settings,
    step: "4",
    title: "Implementation",
    description: "We help you put the right plan in place and review it over time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section bg-bg">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            How We Find the Right Fit
          </h2>
          <p className="mt-3 text-lg text-muted">
            A structured process built around suitability — not sales.
          </p>
        </div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-border" />

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="relative text-center">
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center mb-5 shadow-sm">
                    <step.icon className="w-8 h-8 text-primary-600" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
