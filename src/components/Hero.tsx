import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/lovable-uploads/84899cb1-e389-42c1-9cf3-0cf8d8388922.png" 
          alt="Strat Market Logo" 
          className="h-24 w-auto mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
          Devenez un Trader Professionnel
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{animationDelay: "0.1s"}}>
          Rejoignez Strat Market et transformez votre passion pour les marchés financiers en une carrière réussie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link to="/apply">Postuler Maintenant</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
            <Link to="/formation">Découvrir la Formation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};