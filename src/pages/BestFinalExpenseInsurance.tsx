import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Users, Search, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import GHLEmbedForm from "@/components/GHLEmbedForm";
import ExploreMoreCoverage from "@/components/ExploreMoreCoverage";
import heroFamily from "@/assets/hero-family.jpg";

const faqs = [
  {
    q: "What is the best final expense insurance plan?",
    a: "The best final expense insurance plan is the one priced lowest for your specific age, health, and coverage amount — and issued by a highly rated carrier. Because every company underwrites differently, a licensed independent agent can shop multiple carriers at once and identify which plan offers you the most coverage for the lowest premium.",
  },
  {
    q: "Which carrier offers the best final expense rates?",
    a: "No single carrier is the best for everyone. Mutual of Omaha, Americo, Transamerica, Foresters, and others each underwrite differently — one may offer the best rate for a healthy 65-year-old non-smoker, while another may offer better pricing for an applicant with diabetes or heart history. Comparing quotes from several carriers is the only reliable way to find the best plan.",
  },
  {
    q: "What's the difference between immediate and graded benefit policies?",
    a: "Immediate benefit policies pay the full death benefit from day one if the applicant qualifies through health questions. Graded (or guaranteed-issue) policies accept applicants regardless of health, but typically pay only a return of premium plus interest if death occurs within the first two years; after that, the full benefit applies.",
  },
  {
    q: "Do I need a medical exam to qualify?",
    a: "No. Top final expense carriers issue coverage with no medical exam — qualifying is done through a short health questionnaire (simplified issue) or with no health questions at all (guaranteed issue). There are no doctor visits, blood draws, or lab work required.",
  },
  {
    q: "How do I know I'm getting the best final expense insurance for me?",
    a: "Work with an independent licensed agent — not a captive agent who only sells one company. An independent agent compares quotes across multiple top-rated carriers, factors in your health profile and budget, and recommends the carrier most likely to issue you the most coverage at the lowest locked-in premium.",
  },
];

const carriers = [
  {
    name: "Americo",
    desc: "Known for competitive immediate-benefit final expense pricing and lenient underwriting on common conditions, making Americo a frequent best-rate match for healthy applicants and many with mild health history.",
  },
  {
    name: "Transamerica",
    desc: "A large, highly rated carrier with a broad range of final expense products, including options for applicants with more complex health backgrounds and strong electronic underwriting for fast approvals.",
  },
  {
    name: "CoreBridge",
    desc: "Formerly part of AIG, CoreBridge offers stable, well-rated final expense whole life coverage with consistent underwriting and reliable claims experience — a solid choice for applicants who value carrier strength.",
  },
  {
    name: "Mutual of Omaha",
    desc: "One of the most trusted household names in senior insurance, Mutual of Omaha provides simplified-issue and guaranteed-acceptance final expense policies backed by decades of experience serving older Americans.",
  },
  {
    name: "Foresters",
    desc: "Foresters Financial pairs competitive final expense rates with member benefits like scholarships and community programs, often a strong fit for applicants who want both value and added policyholder perks.",
  },
  {
    name: "Liberty Bankers Life",
    desc: "A specialist in the final expense market with flexible underwriting and several product tiers, Liberty Bankers Life often issues favorable offers for applicants with conditions that other carriers may decline.",
  },
  {
    name: "Baltimore Life",
    desc: "Baltimore Life focuses on simplified-issue whole life for seniors, with straightforward underwriting and consistent pricing that frequently lands as the best option for middle-aged and senior non-smokers.",
  },
  {
    name: "Ethos Life",
    desc: "A modern, technology-forward carrier with a fully digital application process, Ethos Life is a strong choice for applicants who want a fast, paperless experience and quick coverage decisions.",
  },
  {
    name: "InstaBan Fidelity Life",
    desc: "Fidelity Life's InstaBan platform delivers near-instant underwriting decisions for qualifying applicants, making it a top option when speed of coverage is a priority alongside competitive final expense pricing.",
  },
];

const BestFinalExpenseInsurance = () => {
  usePageMeta({
    title: "Best Final Expense Insurance | National Benefits Services Center",
    description:
      "Compare the best final expense insurance plans from top-rated carriers. Free quotes, no obligation. Work with a licensed agent at National Benefits Services Center.",
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
            alt="Family reviewing the best final expense insurance options with a licensed agent"
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
                  <ShieldCheck className="w-3.5 h-3.5" /> Top-rated carriers
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Best Final Expense Insurance — Compare Top Plans &amp; Carriers
                </h1>
                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  Compare the best final expense insurance plans from top-rated carriers. Get a
                  free quote from a licensed agent today.
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
                  Compare top final expense quotes
                </h2>
                <p className="text-sm text-white/70 mb-5">
                  Takes 30 seconds. A licensed agent will follow up.
                </p>
                <GHLEmbedForm instanceId="hero" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What makes a final expense plan the best */}
        <section className="section bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-6">
              What Makes a Final Expense Plan the Best?
            </h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                The <strong>Best Final Expense Insurance</strong> plan isn't a single product —
                it's the carrier and policy that match your age, health, and budget with the
                most coverage for the lowest locked-in premium. Top plans share the same core
                features: no medical exam, simple underwriting, and a permanent benefit
                designed to cover funeral, burial, and end-of-life costs.
              </p>
              <p>
                <strong>No medical exam</strong> is standard. Most carriers approve applicants
                through a short health questionnaire (simplified issue), and guaranteed-issue
                products accept everyone in the eligible age range — no health questions at
                all. There are no labs, no doctor visits, and most decisions are returned in
                minutes.
              </p>
              <p>
                The best plans pair a <strong>locked-in premium</strong> with permanent whole
                life coverage. Once approved, the rate never increases, the benefit never
                decreases, and the policy never expires as long as premiums are paid. Many
                policies also build a small amount of cash value over time.
              </p>
              <p>
                Knowing the difference between <strong>immediate and graded benefit</strong>{" "}
                matters. Immediate-benefit policies pay the full death benefit from day one if
                the applicant qualifies through health questions. Graded or guaranteed-issue
                policies accept any eligible applicant but typically pay only a return of
                premium plus interest in the first two years; after that, the full benefit
                applies.
              </p>
            </div>
          </div>
        </section>

        {/* Top carriers */}
        <section className="section bg-muted-surface">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3">
              Top Carriers We Work With
            </h2>
            <p className="text-lg text-muted mb-10 max-w-3xl">
              As an independent agency, we compare offers across multiple highly rated final
              expense carriers — each with different strengths, underwriting niches, and
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

        {/* How we match */}
        <section className="section bg-surface">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3">
              How We Match You to the Best Plan
            </h2>
            <p className="text-lg text-muted mb-10">
              Because every carrier underwrites differently, the best plan for one applicant
              isn't the best for another. Our licensed agents shop all carriers on your behalf.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Shop every carrier",
                  text: "We run your profile across every appointed carrier and compare real quotes side by side — not just one company's offer.",
                },
                {
                  icon: ShieldCheck,
                  title: "Match to your health profile",
                  text: "We know which carriers underwrite favorably for your specific health history, age, and tobacco status, so you get the strongest possible offer.",
                },
                {
                  icon: Users,
                  title: "Fit your budget",
                  text: "We align coverage amount and product type with your monthly budget, locking in the most permanent benefit for what you can afford.",
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
                "Independent — we represent you, not a single carrier.",
                "No cost to compare. Quotes and consultations are always free.",
                "Licensed agents handle the application, underwriting, and policy delivery.",
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
        <section className="section bg-muted-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-8">
              Best Final Expense Insurance FAQ
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

        <ExploreMoreCoverage currentPath="/best-final-expense-insurance" />

        {/* Footer CTA */}
        <section className="section bg-primary-950">
          <div className="container max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Find Your Best Plan Today
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Talk with a licensed agent today. We'll compare the best final expense
                  insurance plans from top-rated carriers and help you lock in affordable,
                  permanent coverage built around your needs.
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

export default BestFinalExpenseInsurance;
