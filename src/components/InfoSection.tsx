import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Target, BookOpen, Users } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Strat Market?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Une équipe de professionnels expérimentés dans le trading et les marchés financiers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="h-6 w-6" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Des stratégies éprouvées et des résultats consistants sur les marchés.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Un programme complet pour maîtriser le trading professionnel.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Communauté
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Rejoignez une communauté dynamique de traders au Congo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};