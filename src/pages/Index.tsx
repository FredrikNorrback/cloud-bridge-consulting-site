
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const benefits = [
    "Minskade driftskostnader med upp till 40%",
    "Förbättrad systemeffektivitet och tillförlitlighet",
    "Sömlöst dataflöde mellan plattformar",
    "Förstärkt säkerhet och regelefterlevnad",
    "24/7 övervakning och support",
    "Skalbar systemarkitektur"
  ];

  const testimonials = [
    {
      name: "Anna Svensson",
      company: "TechCorp Industries",
      quote: "JN.Net transformerade hela vår verksamhet. Integrationen mellan vårt CRM och Visma.net har sparat oss otaliga timmar.",
      rating: 5
    },
    {
      name: "Lars Andersson",
      company: "Global Logistics",
      quote: "Deras expertis inom Visma-system var ovärderlig. Vi automatiserade 15 processer med LogCore Auto. Imponerande!",
      rating: 5
    },
    {
      name: "Maria Lindberg",
      company: "Financial Services Ltd",
      quote: "Säkerhets- och efterlevnadsfunktionerna överträffade våra förväntningar. Rekommenderar starkt för seriösa företag.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Varför välja JN.Net?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Anslut dig till hundratals företag som har transformerat sina verksamheter med våra expertintegrationstjänster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vad våra kunder säger
            </h2>
            <p className="text-xl text-muted-foreground">
              Verkliga resultat från verkliga företag
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Redo att transformera ditt företag?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Låt oss diskutera dina integrationsbehov och skapa en anpassad lösning som ger resultat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Starta ditt projekt
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/services">
                Läs mer
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
