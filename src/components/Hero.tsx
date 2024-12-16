import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Devenez un Trader Professionnel
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: "0.1s"}}>
          Rejoignez Strat Market et transformez votre passion pour les marchés financiers en une carrière réussie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button asChild size="lg">
            <Link to="/apply">Postuler Maintenant</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/formation">Découvrir la Formation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};