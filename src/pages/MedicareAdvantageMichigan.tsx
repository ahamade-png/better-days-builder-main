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
    q: "What is Medicare Advantage in Michigan?",
    a: "Medicare Advantage (Part C) is a Medicare-approved plan offered by private insurers as an alternative to Original Medicare. In Michigan, plans are issued by carriers like Blue Cross Blue Shield of Michigan, Priority Health, Humana, Aetna, and UnitedHealthcare, and benefits and provider networks vary by county.",
  },
  {
    q: "When can I enroll in a Medicare Advantage plan in Michigan?",
    a: "Most Michigan residents enroll during their Initial Enrollment Period around age 65, the Annual Enrollment Period (October 15 – December 7), or the Medicare Advantage Open Enrollment Period (January 1 – March 31). Special Enrollment Periods may also apply if you move, lose coverage, or qualify for Extra Help.",
  },
  {
    q: "How much does a Medicare Advantage plan cost in Michigan?",
    a: "Many Michigan Medicare Advantage plans have $0 monthly premiums in addition to your Part B premium, but costs vary by county, carrier, and the benefits you choose. A licensed Michigan agent can compare premiums, deductibles, copays, and maximum out-of-pocket limits across plans available where you live.",
  },
  {
    q: "Do Medicare Advantage plans in Michigan cover prescriptions, dental, and vision?",
    a: "Most Michigan Medicare Advantage plans bundle Part D prescription drug coverage and many include extra benefits like dental, vision, hearing, fitness programs, and over-the-counter allowances. Specific benefits and provider networks vary by plan and ZIP code.",
  },
  {
    q: "Can I keep my doctor with a Medicare Advantage plan in Michigan?",
    a: "It depends on the plan's network. HMO plans typically require you to use in-network Michigan providers, while PPO plans may allow out-of-network care at a higher cost. We help you confirm your doctors and preferred Michigan hospitals are in-network before you enroll.",
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


const MedicareAdvantageMichigan = () => {
  usePageMeta({
    title: "Medicare Advantage Michigan",
    description:
      "Compare Medicare Advantage plans in Michigan with a licensed local agent. Free quotes, no obligation. Call National Benefits Services Center today.",
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
                  Medicare Advantage Plans in Michigan — Find the Right Coverage
                </h1>
                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  Compare Medicare Advantage plans available in your Michigan county. Get a free,
                  no-obligation quote from a licensed local agent.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <a
                    href="tel:+13136517596"
                    className="inline-flex items-center gap-2 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> (313) 651-7596
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

        {/* What is Medicare Advantage */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              What is Medicare Advantage?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Medicare Advantage — also called Medicare Part C — is an all-in-one alternative to
                Original Medicare (Parts A and B) offered by private insurance carriers approved by
                Medicare. Plans typically bundle hospital coverage, medical coverage, and
                prescription drug benefits into a single plan.
              </p>
              <p>
                In Michigan, Medicare Advantage plans are offered by carriers such as Blue Cross
                Blue Shield of Michigan, Priority Health, Humana, Aetna, and UnitedHealthcare. Plan
                availability, monthly premiums, provider networks, and extra benefits vary
                significantly by county.
              </p>
              <p>
                Many plans include extras that Original Medicare does not — like dental, vision,
                hearing, fitness memberships, transportation, and over-the-counter allowances.
                Networks (HMO, PPO, or PFFS) determine which Michigan doctors and hospitals you can
                use, so it's important to confirm your providers before enrolling.
              </p>
              <p>
                Because the right plan depends on your medications, doctors, ZIP code, and budget, a
                side-by-side comparison from a licensed local agent is often the fastest way to find
                coverage that actually fits your needs.
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
              Working with a licensed local advisor instead of calling a national 1-800 line gives
              you real advantages — at no cost to you.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "We know Michigan networks",
                  text: "We know which carriers and provider networks are strongest in Wayne, Oakland, Macomb, and surrounding counties — and which plans actually include your doctors and hospitals.",
                },
                {
                  icon: ShieldCheck,
                  title: "Independent, not captive",
                  text: "We're appointed with multiple Medicare Advantage carriers, so we compare plans side-by-side instead of pushing the one product a call center has to sell.",
                },
                {
                  icon: Users,
                  title: "Year-round local support",
                  text: "After you enroll, we're still here in Michigan to help with plan changes, claims questions, and Annual Enrollment reviews — not a different call-center rep every time.",
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
              Medicare Advantage Michigan FAQ
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

        <ExploreMoreCoverage currentPath="/medicare-advantage-michigan" />

        {/* Footer CTA */}
        <section className="section bg-primary-950">
          <div className="container max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Ready to Compare Plans?
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Talk with a licensed Michigan agent today. We'll compare Medicare Advantage plans
                  available in your county and help you choose coverage that fits.
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
              Michigan. We are not affiliated with Medicare or any government agency. Benefits and
              plan availability vary by location.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MedicareAdvantageMichigan;
