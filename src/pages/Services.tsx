
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cloud, Database, Shield, Zap, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Visma.net Konsultation",
      description: "Experthjälp med Visma.net-implementation, konfiguration och optimering för maximala affärsfördelar.",
      features: ["Visma.net implementation", "Systemkonfiguration", "Användarutbildning", "Prestandaoptimering"]
    },
    {
      icon: Cloud,
      title: "Visma NXT Integration",
      description: "Specialiserad på Visma NXT-lösningar och integrationer för moderna affärsprocesser.",
      features: ["Visma NXT setup", "API-integrationer", "Molnmigration", "Systemuppdateringar"]
    },
    {
      icon: Zap,
      title: "LogCore Auto Integrationer",
      description: "Bygg kraftfulla, sömlösa integrationer mellan dina system med LogCore Auto-plattformen.",
      features: ["Anpassade kopplingar", "Realtidsdatasynk", "Automatiserade arbetsflöden", "API-utveckling"]
    },
    {
      icon: Shield,
      title: "Affärsprocessautomatisering",
      description: "Automatisera repetitiva uppgifter och optimera arbetsflöden för ökad produktivitet.",
      features: ["Processanalys", "Arbetsflödesdesign", "Automatiseringslösningar", "Effektivitetsmätning"]
    },
    {
      icon: Users,
      title: "Systemkonsultation & Strategi",
      description: "Strategisk vägledning för att anpassa din teknikstack med affärsmål.",
      features: ["Teknikroadmaps", "Arkitekturdesign", "Bästa praxis", "Utbildning & support"]
    },
    {
      icon: Settings,
      title: "Löpande Support",
      description: "24/7 övervakning och support för att säkerställa att dina system fungerar smidigt.",
      features: ["24/7 övervakning", "Proaktivt underhåll", "Problemlösning", "Regelbundna uppdateringar"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Våra Tjänster
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Omfattande konsultation och integrationstjänster för Visma-system och affärsprocessautomatisering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Redo att komma igång?</h2>
          <p className="text-muted-foreground mb-6">
            Låt oss diskutera dina specifika behov och skapa en anpassad lösning för ditt företag.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Boka en konsultation
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
