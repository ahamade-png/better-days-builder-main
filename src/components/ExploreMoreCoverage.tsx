import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ALL_LINKS = [
  { to: "/medicare-advantage-michigan", label: "Medicare Advantage Plans in Michigan" },
  { to: "/life-insurance-michigan", label: "Life Insurance in Michigan" },
  { to: "/final-expense-michigan", label: "Final Expense Insurance in Michigan" },
  { to: "/best-final-expense-insurance", label: "Best Final Expense Insurance" },
  { to: "/burial-insurance-michigan", label: "Burial Insurance in Michigan" },
];

interface ExploreMoreCoverageProps {
  currentPath: string;
}

const ExploreMoreCoverage = ({ currentPath }: ExploreMoreCoverageProps) => {
  const links = ALL_LINKS.filter((l) => l.to !== currentPath);

  return (
    <section className="section bg-surface">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight mb-3 text-center">
          Explore More Coverage Options
        </h2>
        <p className="text-lg text-muted mb-10 text-center max-w-2xl mx-auto">
          Compare additional coverage we offer across Michigan and nationwide.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between gap-4 rounded-xl border-2 border-gold-400 bg-primary-950 px-6 py-5 text-gold-400 font-semibold transition-all hover:bg-gold-400 hover:text-primary-950 hover:shadow-lg"
            >
              <span>{l.label}</span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreCoverage;
