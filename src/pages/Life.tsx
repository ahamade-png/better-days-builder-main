import { Users } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const features = [
  {
    title: "Family income protection",
    description: "Help ensure your family can maintain their standard of living if something happens to you.",
  },
  {
    title: "Long‑term wealth building",
    description: "Permanent coverage options that may build cash value aligned with your financial goals.",
  },
  {
    title: "Flexible coverage strategies",
    description: "Adjustable plans designed to evolve with your family's changing needs and responsibilities.",
  },
  {
    title: "Personalized suitability review",
    description: "We compare options across carriers to help find coverage that fits your situation — not a one size fits all solution.",
  },
];

const Life = () => {
  return (
    <ProductPageLayout
      title="Life Insurance"
      subtitle="Protect your family's future with coverage designed for your situation."
      description="Life insurance is about more than a policy — it's about making sure your family is financially protected no matter what. We take the time to understand your obligations, goals, and budget to help you find coverage that's appropriate and sustainable for the long term."
      features={features}
      icon={Users}
    />
  );
};

export default Life;
