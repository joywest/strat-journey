import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Devenez un Trader Professionnel
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Apprenez, formez-vous et rejoignez l'équipe de trading de Strat Market. Aucune expérience requise.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90"
          onClick={() => navigate('/apply')}
        >
          Commencer Maintenant <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};