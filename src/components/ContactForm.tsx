import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Votre nom" required />
          </div>
          <div>
            <Input type="email" placeholder="Votre email" required />
          </div>
          <div>
            <Textarea 
              placeholder="Votre message"
              className="min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
};