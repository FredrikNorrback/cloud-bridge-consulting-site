
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      date: "10 december 2024",
      title: "JN.Net utökar partnerskap med Visma för förbättrade integrationslösningar",
      excerpt: "Vi är glada att meddela vårt utökade partnerskap med Visma, vilket ger nya möjligheter till vår integrationsplattform...",
      category: "Partnerskap"
    },
    {
      date: "28 november 2024",
      title: "Nya säkerhetsfunktioner: End-to-End kryptering för alla dataöverföringar",
      excerpt: "Förbättrade säkerhetsåtgärder skyddar nu all data under överföring med krypteringsprotokoll av militär klass...",
      category: "Säkerhet"
    },
    {
      date: "15 november 2024",
      title: "Fallstudie: Hur TechCorp minskade driftskostnaderna med 40%",
      excerpt: "Lär dig hur vår Visma-integration och LogCore Auto hjälpte TechCorp att effektivisera verksamheten och minska kostnaderna...",
      category: "Fallstudie"
    },
    {
      date: "30 oktober 2024",
      title: "JN.Net uppnår SOC 2 Type II-certifiering",
      excerpt: "Vi är stolta över att meddela vår SOC 2 Type II-certifiering, vilket visar vårt engagemang för säkerhet och efterlevnad...",
      category: "Certifiering"
    },
    {
      date: "18 oktober 2024",
      title: "Introducerar realtidsanalys-dashboard",
      excerpt: "Övervaka dina integrationer och systemprestanda med vår nya realtidsanalys och rapporteringsdashboard...",
      category: "Produktuppdatering"
    },
    {
      date: "25 september 2024",
      title: "Bästa praxis för Visma-integration 2024",
      excerpt: "Vår omfattande guide till framgångsrika Visma-integrationsstrategier, med lärdomar från 100+ projekt...",
      category: "Guide"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Partnerskap': 'bg-blue-100 text-blue-800',
      'Säkerhet': 'bg-red-100 text-red-800',
      'Fallstudie': 'bg-green-100 text-green-800',
      'Certifiering': 'bg-purple-100 text-purple-800',
      'Produktuppdatering': 'bg-orange-100 text-orange-800',
      'Guide': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Senaste nyheterna & uppdateringarna
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Håll dig informerad om våra senaste utvecklingar, partnerskap och branschinsikter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors">
                {item.title}
              </h2>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              
              <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                Läs mer
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </article>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Håll dig uppdaterad</h2>
          <p className="text-muted-foreground mb-6">
            Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna och insikterna direkt i din inkorg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ange din e-post"
              className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
            />
            <Button>
              Prenumerera
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
