import { Hero } from "@/components/Hero";
import { TrainingPath } from "@/components/TrainingPath";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { TradingCharts } from "@/components/TradingCharts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <TradingCharts />
      </div>
      <TrainingPath />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;