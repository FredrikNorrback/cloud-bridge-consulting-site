
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Nöjda kunder", value: "150+" },
    { icon: Clock, label: "Års erfarenhet", value: "10+" },
    { icon: Target, label: "Slutförda projekt", value: "500+" },
    { icon: Award, label: "Certifieringar", value: "25+" }
  ];

  const team = [
    {
      name: "Sara Johansson",
      role: "Huvudarkitekt Visma-system",
      description: "15+ års erfarenhet av företags Visma-lösningar och systemarkitektur."
    },
    {
      name: "Mikael Andersson",
      role: "Integrationsspecialist",
      description: "Expert på LogCore Auto och systemkonnektivitet mellan plattformar."
    },
    {
      name: "Emma Lindström",
      role: "Automatiseringskonsult",
      description: "Specialist på affärsprocessautomatisering och arbetsflödesoptimering."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Om JN.Net
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi brinner för att hjälpa företag att låsa upp den fulla potentialen hos Visma-system 
            genom sömlösa integrationer och expertrågivning.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Vår historia</h2>
            <p className="text-muted-foreground mb-4">
              Grundat 2014, JN.Net uppstod från en enkel observation: företag kämpade för att få sina 
              olika Visma-system att fungera tillsammans effektivt. Vi såg företag med kraftfulla 
              individuella verktyg som inte kunde kommunicera, vilket ledde till ineffektivitet och missade möjligheter.
            </p>
            <p className="text-muted-foreground mb-4">
              Våra grundare, med decennier av samlad erfarenhet av företagsmjukvara och Visma-teknologier, 
              satte sig för att överbrygga dessa klyftor. Idag har vi hjälpt över 150 företag att transformera 
              sina verksamheter genom intelligenta systemintegrationer och LogCore Auto-strategier.
            </p>
            <p className="text-muted-foreground">
              Vi tror att teknologi ska fungera för ditt företag, inte emot det. Varje integration 
              vi designar är byggd med dina specifika behov i åtanke, vilket säkerställer maximal effektivitet och skalbarhet.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Vårt uppdrag</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-foreground font-medium">
                "Att ge företag kraft genom att skapa sömlösa kopplingar mellan deras Visma-system, 
                vilket gör det möjligt för dem att fokusera på det de gör bäst medan vi hanterar den tekniska komplexiteten."
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Vi håller oss i framkant av Visma-teknologi för att ge dig toppmoderna lösningar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tillförlitlighet</h3>
                <p className="text-muted-foreground text-sm">
                  Våra lösningar är byggda för stabilitet, säkerhet och långsiktig framgång.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Partnerskap</h3>
                <p className="text-muted-foreground text-sm">
                  Vi arbetar nära dig som en betrodd partner, inte bara en tjänsteleverantör.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Träffa vårt team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
