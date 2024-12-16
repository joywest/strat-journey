import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Target, BookOpen, Users } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="py-16 bg-white text-gray-900 african-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pourquoi Choisir Strat Market?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/90 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Target className="h-6 w-6 text-orange-600" />
                Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Une équipe de professionnels expérimentés dans le trading et les marchés financiers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <ChartLine className="h-6 w-6 text-orange-600" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Des stratégies éprouvées et des résultats consistants sur les marchés.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <BookOpen className="h-6 w-6 text-orange-600" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Un programme complet pour maîtriser le trading professionnel.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Users className="h-6 w-6 text-orange-600" />
                Communauté
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Rejoignez une communauté dynamique de traders au Congo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};