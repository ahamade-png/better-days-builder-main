import { motion } from "framer-motion";
import { Shield, Users, Home, HeartPulse, TrendingUp, Stethoscope } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Final Expense Protection",
    text: "Coverage designed to help with end-of-life costs and ease the financial burden on loved ones.",
  },
  {
    icon: Users,
    title: "Income & Family Protection",
    text: "Policies that may help replace lost income and support dependents in the event of the unexpected.",
  },
  {
    icon: Home,
    title: "Mortgage & Debt Protection",
    text: "Coverage options that can help ensure financial obligations are addressed if something happens to you.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medicare Guidance",
    text: "Support navigating Medicare and supplemental health coverage options based on your situation.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Financial Strategies",
    text: "Solutions designed to align with your broader financial goals and long-term planning needs.",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-16 md:py-20 bg-muted-surface">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center mb-4">
            Coverage Solutions for Different Needs
          </h2>
          <p className="text-lg text-muted leading-relaxed text-center mb-10 max-w-2xl mx-auto">
            We help individuals and families find coverage solutions designed around their financial goals, health profile, and long-term needs.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 rounded-xl bg-surface border border-border shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-text">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <motion.p
            className="mt-8 text-sm text-muted leading-relaxed text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Indexed Universal Life (IUL) strategies may also be available for individuals looking for long-term protection combined with potential cash value growth, depending on eligibility and suitability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
