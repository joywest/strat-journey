import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Trophy, DollarSign } from "lucide-react";

const Formation = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Notre Programme de Formation</h1>
        
        <Tabs defaultValue="apercu" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="apercu">Aperçu de la Formation</TabsTrigger>
            <TabsTrigger value="avantages">Avantages</TabsTrigger>
          </TabsList>

          <TabsContent value="apercu">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Programme Intensif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Introduction aux marchés financiers</li>
                    <li>• Analyse technique approfondie</li>
                    <li>• Gestion des risques</li>
                    <li>• Psychologie du trading</li>
                    <li>• Pratique sur plateforme réelle</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Formation certifiante</li>
                    <li>• Reconnaissance internationale</li>
                    <li>• Support continu post-formation</li>
                    <li>• Accès à notre communauté</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="avantages">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Avantages Financiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Salaire compétitif</li>
                    <li>• Bonus de performance</li>
                    <li>• Plan d'épargne entreprise</li>
                    <li>• Assurance santé</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Avantages au Congo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Premier centre de trading au Congo</li>
                    <li>• Environnement de travail moderne</li>
                    <li>• Opportunités d'évolution rapide</li>
                    <li>• Formation continue</li>
                    <li>• Réseau professionnel local et international</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Formation;