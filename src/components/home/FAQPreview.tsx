import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you represent one carrier or multiple?",
    answer: "Multiple. We compare across carriers to find what fits your situation — not what pays the highest commission.",
  },
  {
    question: "What happens during a coverage review?",
    answer: "We assess your current policies, identify gaps or redundancies, and present alternatives with clear cost-benefit breakdowns. You decide what to act on.",
  },
  {
    question: "Can you review coverage I already have?",
    answer: "Yes. Most clients come to us with existing policies that haven't been reviewed in years. We audit what's in place before recommending anything.",
  },
  {
    question: "How do you communicate with clients?",
    answer: "By phone, text, or email — your choice. We only reach out with your explicit permission and never share your information with third parties.",
  },
];

const FAQPreview = () => {
  return (
    <section className="section bg-bg">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg text-muted">
              Straight answers. No qualifiers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="card px-6 border border-border bg-surface"
              >
                <AccordionTrigger className="text-left font-medium text-text py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted text-base leading-relaxed pt-3 pb-5 border-t border-border">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
            >
              View all resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPreview;
