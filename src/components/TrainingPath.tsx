import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Inscription",
    description: "Remplissez le formulaire et rejoignez notre programme de formation.",
  },
  {
    title: "Formation Théorique",
    description: "Apprenez les fondamentaux du trading et de l'analyse de marché.",
  },
  {
    title: "Formation Pratique",
    description: "Mettez en pratique vos connaissances sur des cas réels.",
  },
  {
    title: "Intégration",
    description: "Devenez trader pour Strat Market avec un salaire compétitif.",
  },
];

export const TrainingPath = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Votre Parcours vers le Trading Professionnel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="glass-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};