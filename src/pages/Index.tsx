import { Hero } from "@/components/Hero";
import { TrainingPath } from "@/components/TrainingPath";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrainingPath />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;