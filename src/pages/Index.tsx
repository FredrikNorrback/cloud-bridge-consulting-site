
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { CheckCircle, ArrowRight, Settings, Database, Workflow } from 'lucide-react';
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

  const expertise = [
    {
      icon: Settings,
      title: "Visma-expertis",
      description: "Djup kunskap inom Visma.net och Visma NXT med över 10 års erfarenhet av implementationer och optimeringar.",
      details: ["Systemkonfiguration", "Användarutbildning", "Processoptimering", "Uppgraderingar"]
    },
    {
      icon: Database,
      title: "LogCore Auto Integrationer",
      description: "Byggd för att skapa sömlösa integrationer mellan alla typer av affärssystem med branschens mest kraftfulla verktyg.",
      details: ["API-integrationer", "Datasynkronisering", "Realtidsöverföring", "Felhantering"]
    },
    {
      icon: Workflow,
      title: "Arbetsflödesautomatisering",
      description: "Automatisera repetitiva uppgifter och skapa effektiva arbetsflöden som sparar tid och minskar fel.",
      details: ["Processautomatisering", "Regelbaserade flöden", "Notifieringar", "Rapportering"]
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

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vår expertis inom systemintegrationer
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialiserade på Visma-system och LogCore Auto för alla dina integrationsbehov
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
