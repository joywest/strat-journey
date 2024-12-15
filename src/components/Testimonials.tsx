import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jean Makaya",
    role: "Trader Senior",
    content: "Grâce à Strat Market, je suis passé de novice à trader professionnel en moins d'un an. La formation est intensive mais très enrichissante.",
    image: "/testimonial1.jpg"
  },
  {
    name: "Marie Bouesso",
    role: "Trader Junior",
    content: "La qualité de la formation et l'accompagnement sont exceptionnels. J'ai maintenant un emploi stable et passionnant.",
    image: "/testimonial2.jpg"
  },
  {
    name: "Patrick Moungali",
    role: "Trader Senior",
    content: "Strat Market m'a donné toutes les clés pour réussir. L'environnement est professionnel et stimulant.",
    image: "/testimonial3.jpg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ils ont Réussi avec Strat Market
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};