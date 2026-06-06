import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const carriers = [
  "Mutual of Omaha",
  "Americo",
  "Royal Neighbors of America",
  "Foresters Financial",
  "SBLI",
  "Gerber Life",
  "Liberty Bankers Life",
  "Corebridge Financial (formerly AIG)",
];

const CarrierLogos = () => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-6">
            <Building2 className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-4">
            Access to Multiple Top-Rated Insurance Carriers
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with a wide range of highly rated insurance companies to help find the right fit for your needs. This includes well-established national carriers as well as specialized providers, including not-for-profit and member-focused organizations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 mb-6">
            {carriers.map((name, i) => (
              <span key={name} className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-text/80 hover:text-primary-600 transition-colors duration-200 cursor-default">
                  {name}
                </span>
                {i < carriers.length - 1 && (
                  <span className="text-muted/40 select-none">•</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            We also have access to additional carriers not listed here, allowing us to match you with the most appropriate coverage based on your specific situation.
          </p>

          <p className="text-xs text-muted/70 max-w-2xl mx-auto">
            We are an independent insurance agency and are not affiliated with or endorsed by these companies. Carrier availability and eligibility vary based on underwriting guidelines, product availability, and state approval.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CarrierLogos;
