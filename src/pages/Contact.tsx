import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import ScheduleConsultation from "@/components/ScheduleConsultation";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import usePageMeta from "@/hooks/usePageMeta";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "313-442-7350",
    href: "tel:3134427350",
  },
  {
    icon: MessageSquare,
    label: "SMS",
    value: "313-442-7350",
    href: "sms:3134427350",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@buildingbetterdaysinsurance.com",
    href: "mailto:support@buildingbetterdaysinsurance.com",
  },
];

const Contact = () => {
  usePageMeta({
    title: "Contact Us",
    description: "Reach out to National Benefits Services Center by phone, text, email, or request form. Licensed insurance agents available to assist.",
  });

  return (
    <div className="page-wrapper">
      <Header />

      <main className="flex-1">
        <section className="section">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
                Contact Us
              </h1>
              <p className="mt-3 text-lg text-muted">
                Reach out using the method that works best for you.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              {/* Contact methods */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="card p-5 flex items-start gap-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-md bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-primary-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text">{method.label}</div>
                        <div className="text-sm text-muted">{method.value}</div>
                      </div>
                    </a>
                  ))}

                  <div className="card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text">Mailing Address</div>
                      <div className="text-sm text-muted">
                        290 Town Center Dr, STE 675<br />
                        Dearborn, MI 48126
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Request form */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <RequestForm />
              </motion.div>
            </div>
          </div>
        </section>

        <ScheduleConsultation embed />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
