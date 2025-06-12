
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Mejla oss",
      details: "info@jnnet.se",
      description: "Skicka oss ett mejl när som helst"
    },
    {
      icon: Phone,
      title: "Ring oss",
      details: "+46 70 44 446-90",
      description: "Mån-Fre från 08:00 till 17:00"
    },
    {
      icon: MapPin,
      title: "Vi finns i",
      details: "Västerås",
      description: "Vårt huvudkontor"
    },
    {
      icon: Clock,
      title: "Öppettider",
      details: "Mån-Fre: 08:00-17:00",
      description: "Vi är här för att hjälpa under kontorstid"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakta oss
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redo att transformera ditt företag med sömlösa integrationer? 
            Låt oss diskutera ditt projekt och se hur vi kan hjälpa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Skicka oss ett meddelande</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontaktinformation</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-foreground font-medium mb-1">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Varför välja JN.Net?</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Gratis inledande konsultation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  24/7 support efter implementation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Beprövad track record med 150+ kunder
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Anpassade lösningar skräddarsydda för dina behov
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Vanliga frågor</h2>
            <p className="text-muted-foreground">
              Snabba svar på vanliga frågor om våra tjänster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Hur lång tid tar ett typiskt projekt?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                De flesta integrationsprojekt tar 2-12 veckor beroende på komplexitet. Vi tillhandahåller detaljerade tidsramar under konsultationen.
              </p>
              
              <h3 className="font-semibold mb-2">Arbetar ni med befintliga Visma-system?</h3>
              <p className="text-muted-foreground text-sm">
                Ja! Vi specialiserar oss på att integrera med befintliga Visma.net och Visma NXT-system.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Vad ingår i löpande support?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Vår support inkluderar 24/7 övervakning, regelbundet underhåll, problemlösning och systemuppdateringar för optimal prestanda.
              </p>
              
              <h3 className="font-semibold mb-2">Hur säkerställer ni datasäkerhet?</h3>
              <p className="text-muted-foreground text-sm">
                Vi implementerar säkerhetsåtgärder av företagsklass inklusive kryptering, åtkomstkontroller och efterlevnad av branschstandarder.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
