import {
  FeaturesSection,
  Footer,
  Hero,
  HowItWorksSection,
  Navbar,
  StatsSection,
  TestimonialsSection,
} from "@/components/landingpage";
import FaqsPage from "./(customer)/faq/page";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqsPage />
      <Footer />
    </div>
  );
}
