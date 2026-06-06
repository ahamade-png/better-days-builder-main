import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Users, MapPin, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import GHLEmbedForm from "@/components/GHLEmbedForm";
import ExploreMoreCoverage from "@/components/ExploreMoreCoverage";
import heroFamily from "@/assets/hero-family.jpg";

const faqs = [
  {
    q: "What is burial insurance in Michigan?",
    a: "Burial insurance — also called final expense insurance — is a small whole life policy designed to cover funeral, burial, and end-of-life costs in Michigan. It pays a tax-free lump sum to your beneficiary, who can use it for funeral services, cemetery costs, or any other expense.",
  },
  {
    q: "How much burial insurance do I need in Michigan?",
    a: "Most Michigan families choose between $10,000 and $25,000 in coverage, which generally aligns with the average $7,000–$12,000 cost of a traditional funeral plus headstone, transportation, and other final expenses. A licensed agent can help you select an amount that fits your budget and goals.",
  },
  {
    q: "Do I need a medical exam to qualify?",
    a: "No. Burial insurance in Michigan is issued with no medical exam. Most carriers approve coverage through a short health questionnaire (simplified issue), and guaranteed-acceptance plans are available for applicants who can't qualify medically.",
  },
  {
    q: "Will my premium or benefit ever change?",
    a: "No. Burial insurance is permanent whole life coverage. Once your policy is issued, the premium is locked in for life, the death benefit never decreases, and the policy never expires as long as premiums are paid on time.",
  },
  {
    q: "What's the difference between immediate and graded benefit policies?",
    a: "Immediate-benefit policies pay the full death benefit from day one when the applicant qualifies through health questions. Graded or guaranteed-issue policies accept any eligible applicant but typically pay only a return of premium plus interest if death occurs within the first two years; after that, the full benefit applies.",
  },
];

const carriers = [
  {
    name: "Americo",
    desc: "Competitive immediate-benefit pricing and lenient underwriting on common health conditions — frequently a best-rate match for healthy Michigan applicants and those with mild health history.",
  },
  {
    name: "Transamerica",
    desc: "A large, highly rated carrier offering a wide range of burial insurance products, including options for applicants with more complex health histories and fast electronic underwriting.",
  },
  {
    name: "CoreBridge",
    desc: "Formerly part of AIG, CoreBridge provides stable, well-rated final expense whole life coverage with consistent underwriting and reliable claims experience.",
  },
  {
    name: "Mutual of Omaha",
    desc: "One of the most trusted household names in senior insurance, with simplified-issue and guaranteed-acceptance burial insurance backed by decades of experience.",
  },
  {
    name: "Foresters",
    desc: "Pairs competitive burial insurance rates with member benefits like scholarships and community programs — a strong fit for applicants who want added policyholder perks.",
  },
  {
    name: "Liberty Bankers Life",
    desc: "A burial insurance specialist with flexible underwriting and several product tiers, often issuing favorable offers for applicants with conditions other carriers may decline.",
  },
  {
    name: "Baltimore Life",
    desc: "Focused on simplified-issue whole life for seniors, with straightforward underwriting and consistent pricing that frequently lands as the best option for middle-aged and senior non-smokers.",
  },
  {
    name: "Ethos Life",
    desc: "A modern, technology-forward carrier with a fully digital application — a strong choice for Michigan applicants who want a fast, paperless experience and quick coverage decisions.",
  },
  {
    name: "InstaBan Fidelity Life",
    desc: "Fidelity Life's InstaBan platform delivers near-instant underwriting decisions for qualifying applicants, combining speed with competitive burial insurance pricing.",
  },
];

const BurialInsuranceMichigan = () => {
  usePageMeta({
    title: "Burial Insurance Michigan | National Benefits Services Center",
    description:
      "Affordable burial insurance in Michigan. Cover funeral costs and protect your family. Free quotes from a licensed local agent. Call National Benefits Services Center today.",
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
            alt="Michigan family reviewing affordable burial insurance options with a licensed local agent"
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
                  <ShieldCheck className="w-3.5 h-3.5" /> Licensed in Michigan
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Burial Insurance in Michigan — Affordable Final Expense Coverage
                </h1>
                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  Get affordable burial insurance in Michigan. Protect your family from funeral
                  costs with a plan that fits your budget. Free quote from a licensed local
                  agent.
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
                <GHLEmbedForm instanceId="hero" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Burial Insurance */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              What Is Burial Insurance?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                <strong>Burial Insurance Michigan</strong> — also known as final expense
                insurance — is a small whole life policy designed to cover funeral, burial, and
                end-of-life costs so your loved ones aren't left with the bill. Coverage
                amounts typically range from $5,000 to $40,000 and pay a tax-free lump sum
                directly to your beneficiary.
              </p>
              <p>
                Because burial insurance is <strong>whole life coverage</strong>, the policy
                stays in force for your entire life as long as premiums are paid. It never
                expires at a certain age and doesn't require renewal.
              </p>
              <p>
                There is <strong>no medical exam</strong> to qualify. Most carriers approve
                applicants through a short health questionnaire, and guaranteed-acceptance
                plans are available for those who can't qualify medically. Decisions are
                typically returned within minutes.
              </p>
              <p>
                Your <strong>premium never increases and the death benefit never decreases</strong>.
                The amount you're quoted is locked in for life — providing stable, predictable
                protection for your family.
              </p>
            </div>
          </div>
        </section>

        {/* Funeral cost in Michigan */}
        <section className="section bg-muted-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              How Much Does a Funeral Cost in Michigan?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The average traditional funeral in Michigan costs between{" "}
                <strong>$7,000 and $12,000</strong>, depending on services chosen, casket and
                vault selection, cemetery fees, and the funeral home's location. Adding a
                headstone, flowers, transportation, and a reception can push the total higher.
              </p>
              <p>
                Without coverage in place, these costs typically fall on surviving family
                members at the worst possible time. A burial insurance policy is designed to
                cover those expenses so loved ones aren't forced to drain savings, take on
                debt, or run a fundraiser to lay a parent or spouse to rest.
              </p>
              <p>
                Choosing a coverage amount that matches local Michigan funeral costs ensures
                your family receives a benefit large enough to handle the bill in full — with
                anything left over going directly to your beneficiary.
              </p>
            </div>
          </div>
        </section>

        {/* Top carriers */}
        <section className="section bg-surface">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3">
              Top Carriers We Work With
            </h2>
            <p className="text-lg text-muted mb-10 max-w-3xl">
              As an independent agency, we compare offers across multiple highly rated burial
              insurance carriers — each with different strengths, underwriting niches, and
              pricing advantages.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {carriers.map((c) => (
                <div key={c.name} className="card p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">{c.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who qualifies */}
        <section className="section bg-muted-surface">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3">
              Who Qualifies for Burial Insurance in Michigan?
            </h2>
            <p className="text-lg text-muted mb-10">
              Burial insurance is built for Michigan residents who want simple, permanent
              coverage without the cost or hassle of traditional life insurance underwriting.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Ages 50–85",
                  text: "Most Michigan burial insurance carriers issue coverage to applicants between ages 50 and 85, with some products extending to age 89.",
                },
                {
                  icon: ShieldCheck,
                  title: "Guaranteed acceptance",
                  text: "Guaranteed-acceptance plans approve every eligible Michigan applicant — no health questions and no medical exam required.",
                },
                {
                  icon: Users,
                  title: "Immediate or graded",
                  text: "Choose immediate-benefit coverage if you qualify medically, or a graded-benefit plan if you have significant health history.",
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

            <ul className="mt-10 space-y-3 max-w-2xl">
              {[
                "No medical exam — qualifying is based on a short health questionnaire or no questions at all.",
                "Permanent whole life coverage with a locked-in premium for life.",
                "Tax-free lump-sum benefit paid directly to your chosen beneficiary.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-8">
              Burial Insurance Michigan FAQ
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

        <ExploreMoreCoverage currentPath="/burial-insurance-michigan" />

        {/* Footer CTA */}
        <section className="section bg-primary-950">
          <div className="container max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Protect Your Family Today
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Talk with a licensed Michigan agent today. We'll compare burial insurance
                  plans from top-rated carriers and help you lock in affordable, permanent
                  coverage built around your family's needs.
                </p>
                <a
                  href="tel:+13136517596"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-5 h-5" /> (313) 651-7596
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/15 p-6 md:p-7">
                <GHLEmbedForm instanceId="footer" />
              </div>
            </div>

            <p className="mt-12 text-xs text-white/55 leading-relaxed max-w-3xl">
              National Benefits Services Center is an independent insurance agency licensed in
              Michigan. We are not affiliated with any government agency. Coverage and plan
              availability vary by location.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BurialInsuranceMichigan;
