import {
  FeaturesSection,
  Footer,
  Hero,
  HowItWorksSection,
  Navbar,
  StatsSection,
  TestimonialsSection,
} from "@/components/landingpage";
import { FaqSection } from "@/components/faqs";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
