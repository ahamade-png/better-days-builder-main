import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import GHLEmbedForm from "@/components/GHLEmbedForm";
import ExploreMoreCoverage from "@/components/ExploreMoreCoverage";
import heroFamily from "@/assets/hero-family.jpg";

const faqs = [
  {
    q: "What types of life insurance are available in Michigan?",
    a: "Michigan residents can choose from term life, whole life, universal life, and final expense (burial) insurance. Term life offers affordable coverage for a set period, while whole and universal life are permanent policies that build cash value. The right type depends on your age, budget, and what you want the policy to do for your family.",
  },
  {
    q: "How much does life insurance cost in Michigan?",
    a: "Premiums in Michigan are based on age, health, tobacco use, coverage amount, and policy type. A healthy 35-year-old may qualify for a 20-year, $250,000 term policy for around $15–$25 per month, while older applicants or permanent policies cost more. A licensed Michigan agent can compare quotes from multiple carriers to find the best fit for your budget.",
  },
  {
    q: "Do I need a medical exam to get life insurance in Michigan?",
    a: "Not always. Many Michigan carriers offer simplified-issue and guaranteed-issue policies that skip the medical exam, using health questions and prescription history instead. Fully underwritten policies usually offer lower premiums but require an exam. We help you compare both paths so you can choose what makes sense.",
  },
  {
    q: "Which life insurance companies serve Michigan?",
    a: "We work with highly rated carriers available to Michigan residents — including Mutual of Omaha, Foresters Financial, Americo, Aetna, Gerber Life, AIG, and others. Because each carrier underwrites differently, comparing several quotes typically produces the best rate for your health profile.",
  },
  {
    q: "Can I get life insurance in Michigan if I have pre-existing conditions?",
    a: "Yes. Many Michigan applicants with diabetes, high blood pressure, heart conditions, or other health issues still qualify for coverage. Some carriers specialize in higher-risk applicants, and guaranteed-issue policies are available with no health questions for those who can't qualify elsewhere.",
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


const LifeInsuranceMichigan = () => {
  usePageMeta({
    title: "Life Insurance Michigan",
    description:
      "Compare life insurance policies in Michigan with a licensed local agent. Term, whole, and final expense quotes — free, no obligation. Call National Benefits Services Center today.",
  });

  // FAQPage JSON-LD
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
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroFamily})` }}
            aria-hidden="true"
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
                  Life Insurance in Michigan — Protect Your Family's Future
                </h1>
                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  Compare term, whole, and final expense life insurance policies available to
                  Michigan residents. Get a free, no-obligation quote from a licensed local agent.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <a
                    href="tel:+13134427350"
                    className="inline-flex items-center gap-2 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> (313) 442-7350
                  </a>
                  <span>•</span>
                  <span>No obligation</span>
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

        {/* What is Life Insurance */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              What is Life Insurance?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Life insurance is a contract between you and an insurance carrier: you pay a
                monthly premium, and in return your beneficiaries receive a tax-free cash payout
                if you pass away while the policy is in force. That money can replace lost
                income, pay off a mortgage, cover funeral and final expenses, fund a child's
                education, or simply give your family time to grieve without financial pressure.
              </p>
              <p>
                Michigan residents typically choose between three main types of coverage.{" "}
                <strong>Term life</strong> provides affordable protection for a set period
                (commonly 10, 20, or 30 years) and is ideal for income replacement during
                working years. <strong>Whole life</strong> and <strong>universal life</strong>{" "}
                are permanent policies that never expire and build cash value over time.{" "}
                <strong>Final expense</strong> is a smaller whole-life policy designed to cover
                funeral and burial costs, often with simplified underwriting.
              </p>
              <p>
                Because rates, underwriting, and policy features vary widely between carriers,
                comparing multiple quotes is the single best way to lock in the lowest premium
                for the coverage you actually need. A licensed Michigan agent can do that
                comparison for you at no cost.
              </p>
            </div>
          </div>
        </section>

        {/* Why local agent */}
        <section className="section bg-muted-surface">
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
                  text: "We know which carriers underwrite favorably for Michigan residents and which products fit families in Wayne, Oakland, Macomb, and surrounding counties.",
                },
                {
                  icon: ShieldCheck,
                  title: "Independent, not captive",
                  text: "We're appointed with multiple highly rated life insurance carriers, so we shop your application across companies instead of pushing one product.",
                },
                {
                  icon: Users,
                  title: "Year-round local support",
                  text: "After your policy is in force, we're still here in Michigan to help with beneficiary changes, policy reviews, and claims support — not a different rep every call.",
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
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-8">
              Life Insurance Michigan FAQ
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

        <ExploreMoreCoverage currentPath="/life-insurance-michigan" />

        {/* Footer CTA */}
        <section className="section bg-primary-950">
          <div className="container max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Ready to Compare Policies?
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Talk with a licensed Michigan agent today. We'll compare life insurance quotes
                  from multiple carriers and help you choose coverage that fits your family and
                  your budget.
                </p>
                <a
                  href="tel:+13134427350"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-5 h-5" /> (313) 442-7350
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-6 md:p-7">
                <LeadForm variant="dark" formId="footer" />
              </div>
            </div>

            <p className="mt-12 text-xs text-white/55 leading-relaxed max-w-3xl">
              National Benefits Services Center is an independent insurance agency licensed in
              Michigan. Life insurance policies are issued by third-party carriers; coverage,
              premiums, and eligibility are subject to underwriting and vary by carrier and
              applicant. This page is for informational purposes and is not a guarantee of
              coverage.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LifeInsuranceMichigan;
