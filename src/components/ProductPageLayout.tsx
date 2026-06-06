import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import { type LucideIcon } from "lucide-react";

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  icon: LucideIcon;
}

const ProductPageLayout = ({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
}: ProductPageLayoutProps) => {
  return (
    <div className="page-wrapper">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/30 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
            </div>
          </div>

          <div className="container relative py-16 md:py-20">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {title}
              </h1>
              <p className="mt-3 text-lg text-primary-200">{subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="section-sm">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-semibold text-text mb-4">Overview</h2>
                <p className="text-muted leading-relaxed">{description}</p>
                
                <div className="mt-8 flex gap-4 flex-wrap">
                  <Link to="/contact#request" className="btn-primary">
                    Request Information
                  </Link>
                  <a href="tel:3134427350" className="btn-outline">
                    Call 313-442-7350
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold text-text mb-4">Key Features</h2>
                {features.map((feature, index) => (
                  <div key={index} className="card p-5">
                    <h3 className="text-sm font-semibold text-text mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="section bg-bg/50" id="request">
          <div className="container max-w-2xl">
            <RequestForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPageLayout;
