
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const faqs = [
    {
      question: "Vilka Visma-system arbetar ni med?",
      answer: "Vi specialiserar oss på Visma.net, Visma NXT och deras integrationer."
    },
    {
      question: "Hur lång tid tar en typisk integration?",
      answer: "Projekt varierar vanligtvis från 2-12 veckor beroende på komplexitet."
    },
    {
      question: "Tillhandahåller ni löpande support?",
      answer: "Ja, vi erbjuder 24/7 övervakning och supportpaket för alla implementationer."
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">JN.Net</h3>
            <p className="text-muted-foreground mb-4">
              Expertkonsulter specialiserade på Visma-system, integrationer och affärsprocessautomatisering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Tjänster</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Om oss</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">Nyheter</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontaktinfo</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">info@jn.net</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+46 (0)8 123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Storgatan 123, Stockholm</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Vanliga frågor</h4>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-foreground mb-1">{faq.question}</p>
                  <p className="text-xs text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 JN.Net. Alla rättigheter förbehållna. | Integritetspolicy | Användarvillkor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
