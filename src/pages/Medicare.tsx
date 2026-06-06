import { Heart } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import usePageMeta from "@/hooks/usePageMeta";

const features = [
  {
    title: "Coverage that fits your healthcare needs",
    description: "We help you compare Medicare Advantage and Supplement options based on your doctors, prescriptions, and care priorities.",
  },
  {
    title: "Budget‑conscious planning",
    description: "Find a plan that balances your healthcare needs with long‑term affordability — not just the lowest monthly premium.",
  },
  {
    title: "Prescription drug guidance",
    description: "Part D plan comparisons tailored to your specific medications and pharmacy preferences.",
  },
  {
    title: "Personalized enrollment support",
    description: "We walk you through enrollment periods and eligibility so you can make confident, informed decisions.",
  },
];

const Medicare = () => {
  usePageMeta({
    title: "Medicare Coverage",
    description: "Compare Medicare Advantage, Supplement, and Part D prescription drug plans. Licensed agents explain enrollment periods and coverage options.",
  });

  return (
    <ProductPageLayout
      title="Medicare Coverage"
      subtitle="Helping you choose coverage that fits your healthcare needs and long‑term budget."
      description="Medicare decisions affect your health and finances for years to come. We provide personalized guidance — comparing plans based on your doctors, medications, and care priorities — so you can choose coverage that's right for your situation, not just what's available."
      features={features}
      icon={Heart}
    />
  );
};

export default Medicare;
