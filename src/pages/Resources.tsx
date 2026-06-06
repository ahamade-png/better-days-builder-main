import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import usePageMeta from "@/hooks/usePageMeta";

const faqs = [
  {
    question: "How do I know which type of insurance is right for me?",
    answer: "The right coverage depends on your individual circumstances, including your age, health, budget, and financial goals. We provide clear explanations of each option and can help you compare plans based on your specific needs.",
  },
  {
    question: "Do I need a medical exam to qualify for coverage?",
    answer: "It depends on the type of policy. Some life insurance and final expense policies offer simplified underwriting with no medical exam required. Medicare and supplemental plans generally don't require medical exams for enrollment.",
  },
  {
    question: "What is the difference between term and whole life insurance?",
    answer: "Term life insurance provides coverage for a specific period (such as 10, 20, or 30 years) and is typically more affordable. Whole life insurance provides permanent coverage for your entire life and includes a cash value component that grows over time.",
  },
  {
    question: "When can I enroll in Medicare?",
    answer: "You can enroll during your Initial Enrollment Period, which begins three months before your 65th birthday and ends three months after. There are also Special Enrollment Periods and an Annual Enrollment Period each fall.",
  },
  {
    question: "How do I opt out of text messages?",
    answer: "You can opt out at any time by replying STOP to any message. You can also text HELP for assistance or contact us directly at 313-442-7350.",
  },
];

const glossary = [
  { term: "Beneficiary", definition: "The person or entity designated to receive the benefits from an insurance policy." },
  { term: "Premium", definition: "The amount you pay for insurance coverage, typically on a monthly or annual basis." },
  { term: "Deductible", definition: "The amount you pay out-of-pocket before your insurance begins to cover costs." },
  { term: "Underwriting", definition: "The process insurers use to evaluate risk and determine policy terms and pricing." },
  { term: "Rider", definition: "An optional add-on to an insurance policy that provides additional benefits or coverage." },
  { term: "Cash value", definition: "The savings component of permanent life insurance that accumulates over time." },
];

const Resources = () => {
  usePageMeta({
    title: "Insurance Resources & FAQ",
    description: "Find answers to common insurance questions and browse our glossary. Understand final expense, Medicare, supplemental coverage, and enrollment terms.",
  });

  return (
    <div className="page-wrapper">
      <Header />

      <main className="flex-1">
        <section className="section">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-text tracking-tight text-center">
                Resources
              </h1>
              <p className="mt-3 text-lg text-muted text-center">
                Answers to common questions and helpful definitions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-sm bg-bg/50">
          <div className="container max-w-3xl">
            <h2 className="text-xl font-semibold text-text mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="card px-5">
                  <AccordionTrigger className="text-left text-sm font-medium text-text py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Glossary */}
        <section className="section-sm">
          <div className="container max-w-3xl">
            <h2 className="text-xl font-semibold text-text mb-6">Insurance Glossary</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {glossary.map((item) => (
                <div key={item.term} className="card p-4">
                  <h3 className="text-sm font-semibold text-text mb-1">{item.term}</h3>
                  <p className="text-sm text-muted">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
