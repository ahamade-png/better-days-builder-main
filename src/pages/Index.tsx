import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import FamilyFirstStatement from "@/components/home/FamilyFirstStatement";
import PersonalizedCoverage from "@/components/home/PersonalizedCoverage";
import MidPageCTA from "@/components/home/MidPageCTA";
import ScheduleConsultation from "@/components/ScheduleConsultation";
import CarrierLogos from "@/components/home/CarrierLogos";
import TrustBar from "@/components/home/TrustBar";
import FAQPreview from "@/components/home/FAQPreview";
import RequestForm from "@/components/RequestForm";
import usePageMeta from "@/hooks/usePageMeta";


const Index = () => {
  usePageMeta({
    title: "National Benefits Services Center | Personalized Coverage for Your Family",
    description: "Personalized insurance strategies designed to protect your family, align with your financial goals, and ensure appropriate, sustainable coverage for long-term security.",
  });

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <FamilyFirstStatement />
        <PersonalizedCoverage />
        <CarrierLogos />
        <TrustBar />
        <MidPageCTA />
        <ScheduleConsultation />
        <FAQPreview />
        
        <section className="section bg-bg" id="request">
          <div className="container">
            <RequestForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
