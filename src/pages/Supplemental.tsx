import { Umbrella } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const features = [
  {
    title: "Hospital stay protection",
    description: "Cash benefits that help your family cover costs during hospital stays — so you can focus on recovery, not bills.",
  },
  {
    title: "Critical illness support",
    description: "Financial protection if you're diagnosed with a covered condition, helping your family manage expenses during a difficult time.",
  },
  {
    title: "Accident coverage",
    description: "Additional protection for unexpected injuries, filling gaps your primary plan may leave exposed.",
  },
  {
    title: "Dental and vision care",
    description: "Help maintain your family's overall health with coverage for routine and unexpected dental or vision needs.",
  },
];

const Supplemental = () => {
  usePageMeta({
    title: "Supplemental Insurance",
    description: "Explore hospital indemnity, critical illness, accident, and dental & vision supplemental insurance to fill gaps in your existing coverage.",
  });

  return (
    <ProductPageLayout
      title="Supplemental Insurance"
      subtitle="Filling the gaps so your family isn't left exposed when it matters most."
      description="Primary insurance doesn't always cover everything. Supplemental coverage helps protect your family from unexpected out‑of‑pocket costs — providing benefits directly to you when covered events occur, so you can use the funds however your family needs them most."
      features={features}
      icon={Umbrella}
    />
  );
};

export default Supplemental;
