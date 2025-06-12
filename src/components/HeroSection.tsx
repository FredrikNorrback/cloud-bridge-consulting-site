
import React from 'react';
import { ArrowRight, Cloud, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative overflow-hidden py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/fffbf05a-d962-4d50-a0a4-44f7b278be23.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transformera ditt företag med
            <span className="text-primary block mt-2">Sömlösa Systemintegrationer</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vi är expertkonsulter specialiserade på affärssystem och integrationer. 
            Låt oss skapa sömlösa integrationer mellan dina system med LogCore Auto, 
            optimera dina Visma.net och Visma NXT-lösningar, och automatisera dina arbetsflöden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Kom igång idag
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/services">
                Utforska tjänster
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Systemintegrationer</h3>
              <p className="text-gray-200">Sömlösa integrationer med LogCore Auto för optimerade arbetsflöden</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Visma-konsultation</h3>
              <p className="text-gray-200">Expert på Visma.net och Visma NXT för optimerade affärsprocesser</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Automatisering</h3>
              <p className="text-gray-200">Automatisera dina arbetsflöden för ökad effektivitet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
