import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FileCheck, TrendingUp, Home, Stethoscope, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Shield,
    title: "Final Expense Protection",
    description: "Help ensure end‑of‑life costs are covered with benefits matched to your family's real financial situation — not a one size fits all policy.",
    href: "/final-expense",
  },
  {
    icon: FileCheck,
    title: "Income & Family Protection",
    description: "Replace lost income with coverage amounts aligned to your actual obligations, so your family maintains their standard of living.",
    href: "/life",
  },
  {
    icon: TrendingUp,
    title: "Long‑Term Financial Security",
    description: "Permanent life strategies that may build cash value over time, structured around your family's evolving goals and risk tolerance.",
    href: "/life#iul",
  },
  {
    icon: Home,
    title: "Mortgage & Debt Protection",
    description: "Coverage matched to your specific debts and timeline, so obligations don't fall on those you leave behind.",
    href: "/life#mortgage-protection",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Coverage Guidance",
    description: "Navigate Medicare and supplemental options based on your healthcare needs and budget — ensuring the benefits you choose actually fit.",
    href: "/medicare",
  },
];

const ProductTiles = () => {
  return (
    <section className="section bg-muted-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Coverage Matched to Your Needs
          </h2>
          <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
            Every family's situation is different. We help you find the correct benefits and coverage for yours.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={product.href}
                className="card-hover block h-full p-6"
              >
                <div className="w-12 h-12 rounded-full bg-muted-surface flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTiles;
