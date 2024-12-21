import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Target, BookOpen, Users } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
          Pourquoi Choisir Strat Market?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover bg-white/90 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Target className="h-6 w-6 text-orange-500" />
                Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Une équipe de professionnels expérimentés dans le trading et les marchés financiers.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/90 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <ChartLine className="h-6 w-6 text-orange-500" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Des stratégies éprouvées et des résultats consistants sur les marchés.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/90 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <BookOpen className="h-6 w-6 text-orange-500" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Un programme complet pour maîtriser le trading professionnel.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/90 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Users className="h-6 w-6 text-orange-500" />
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