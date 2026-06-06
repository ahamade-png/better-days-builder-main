import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import GHLEmbedForm from "@/components/GHLEmbedForm";
import ExploreMoreCoverage from "@/components/ExploreMoreCoverage";
import heroFamily from "@/assets/hero-family.jpg";

const faqs = [
  {
    q: "What is final expense insurance and how does it work in Michigan?",
    a: "Final expense insurance is a small whole life policy designed to cover funeral, burial, and end-of-life costs. Michigan residents typically choose coverage between $5,000 and $25,000. Premiums are locked in for life, the death benefit never decreases, and the policy never expires as long as premiums are paid.",
  },
  {
    q: "Do I need a medical exam to qualify in Michigan?",
    a: "No medical exam is required. Most Michigan applicants qualify through a short health questionnaire (simplified issue), and guaranteed-issue policies are available for those with serious health conditions — no questions asked, no exam.",
  },
  {
    q: "How much does final expense insurance cost in Michigan?",
    a: "Premiums depend on age, gender, tobacco use, and coverage amount. A non-smoking 65-year-old Michigan resident may qualify for a $10,000 policy for roughly $40–$60 per month. Rates are locked in at issue and never increase.",
  },
  {
    q: "Who can be the beneficiary of my policy?",
    a: "You can name any person or entity — a spouse, adult child, sibling, friend, or even a funeral home. Benefits are paid directly to your beneficiary as a tax-free lump sum, usually within days of the claim, so they can pay funeral costs and any remaining bills without delay.",
  },
  {
    q: "What happens if I have pre-existing health conditions?",
    a: "Most applicants still qualify. Michigan carriers offer simplified-issue plans for common conditions like diabetes, high blood pressure, or heart issues, and guaranteed-issue plans that accept everyone ages 50–85 regardless of health (with a short graded benefit period in the first two years).",
  },
];

interface LeadFormProps {
  variant?: "light" | "dark";
  formId: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LeadForm = ({ variant, formId }: LeadFormProps) => (
  <GHLEmbedForm instanceId={formId} />
);


const FinalExpenseMichigan = () => {
  usePageMeta({
    title: "Final Expense Insurance Michigan",
    description:
      "Affordable final expense insurance in Michigan. No medical exam. Free quotes from a licensed local agent. Call National Benefits Services Center today.",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-900">
          <img
            src={heroFamily}
            alt="Michigan family protected by final expense insurance"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/95 to-primary-800/90" />

          <div className="container relative py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" /> Licensed in Michigan
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Final Expense Insurance in Michigan — Affordable Coverage for Your Family
                </h1>
                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  Get affordable final expense insurance in Michigan. No medical exam required.
                  Free quote from a licensed local agent.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <a
                    href="tel:+13136517596"
                    className="inline-flex items-center gap-2 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> (313) 651-7596
                  </a>
                  <span>•</span>
                  <span>No medical exam</span>
                  <span>•</span>
                  <span>Free quote</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-6 md:p-7"
              >
                <h2 className="text-xl font-semibold text-white mb-1">
                  Get your free Michigan quote
                </h2>
                <p className="text-sm text-white/70 mb-5">
                  Takes 30 seconds. A licensed agent will follow up.
                </p>
                <LeadForm variant="dark" formId="hero" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Final Expense */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              What is Final Expense Insurance?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                <strong>Final Expense Insurance Michigan</strong> residents rely on is a small
                whole life policy built for one purpose: covering the cost of a funeral, burial
                or cremation, and any final bills your family is left with. Coverage amounts
                typically range from $5,000 to $25,000 — enough to handle end-of-life costs
                without draining savings or putting the burden on loved ones.
              </p>
              <p>
                There is <strong>no medical exam</strong>. Most applicants qualify through a few
                health questions, and guaranteed-issue options accept everyone in the eligible
                age range. Once approved, your <strong>premium is locked in for life</strong> —
                it never increases, and the policy never expires as long as you keep paying.
              </p>
              <p>
                Because it's whole life coverage, the death benefit is permanent and also builds
                a small amount of cash value over time. When the claim is filed, the carrier
                typically pays the beneficiary a tax-free lump sum within days, so funeral costs
                can be settled right away.
              </p>
              <p>
                For many Michigan families, final expense insurance is the simplest, most
                affordable way to make sure no one has to scramble or borrow money during an
                already difficult time.
              </p>
            </div>
          </div>
        </section>

        {/* Who Qualifies */}
        <section className="section bg-muted-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              Who Qualifies?
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Final expense insurance is designed to be easy to qualify for, especially for
              Michigan seniors who may have been declined for traditional life insurance.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Ages 50 to 85",
                  text: "Most Michigan carriers issue coverage to applicants between 50 and 85 years old, with some products extending to 80 or 85 depending on the underwriting class.",
                },
                {
                  title: "Guaranteed-acceptance options",
                  text: "If health issues have made coverage difficult before, guaranteed-issue plans accept all eligible applicants with no health questions — coverage is approved regardless of medical history.",
                },
                {
                  title: "No medical exam required",
                  text: "There are no doctor visits, no blood tests, and no lab work. Simplified-issue policies use a short health questionnaire; guaranteed-issue policies skip that too.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="text-muted leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why local agent */}
        <section className="section bg-surface">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3">
              Why Choose a Local Michigan Agent?
            </h2>
            <p className="text-lg text-muted mb-10">
              Working with a licensed local advisor instead of an out-of-state call center gives
              you real advantages — at no cost to you.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "We know Michigan carriers",
                  text: "We know which final expense carriers underwrite favorably for Michigan applicants and which products offer the most coverage for your premium.",
                },
                {
                  icon: ShieldCheck,
                  title: "Independent, not captive",
                  text: "We're appointed with multiple highly rated final expense carriers, so we shop your application across companies instead of pushing one product.",
                },
                {
                  icon: Users,
                  title: "Year-round local support",
                  text: "After your policy is in force, we're still here in Michigan to help with beneficiary changes, policy questions, and claims support for your family.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="w-11 h-11 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-muted-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-8">
              Final Expense Insurance Michigan FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-border bg-surface p-5 open:bg-muted-surface transition-colors"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-start gap-4 text-base font-semibold text-text">
                    {f.q}
                    <span className="text-primary-600 transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ExploreMoreCoverage currentPath="/final-expense-michigan" />

        {/* Footer CTA */}
        <section className="section bg-primary-950">
          <div className="container max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Protect Your Family Today
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Talk with a licensed Michigan agent today. We'll compare final expense quotes
                  from multiple carriers and help you lock in affordable, permanent coverage
                  designed for your family's needs.
                </p>
                <a
                  href="tel:+13136517596"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-5 h-5" /> (313) 651-7596
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-6 md:p-7">
                <LeadForm variant="dark" formId="footer" />
              </div>
            </div>

            <p className="mt-12 text-xs text-white/55 leading-relaxed max-w-3xl">
              National Benefits Services Center is an independent insurance agency licensed in
              Michigan. We are not affiliated with any government agency. Coverage and plan
              availability vary by location. Final expense policies are issued by third-party
              carriers; premiums and eligibility are subject to underwriting.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinalExpenseMichigan;
