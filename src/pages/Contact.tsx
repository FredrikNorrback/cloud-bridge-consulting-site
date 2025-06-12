
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@cloudsync.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Ave, Tech City",
      description: "Our main office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-6pm PST",
      description: "We're here to help during business hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with seamless cloud integration? 
            Let's discuss your project and see how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
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
              <h3 className="font-semibold text-foreground mb-3">Why Choose CloudSync?</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  24/7 support after implementation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Proven track record with 150+ clients
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Custom solutions tailored to your needs
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Most integration projects take 2-12 weeks depending on complexity. We provide detailed timelines during consultation.
              </p>
              
              <h3 className="font-semibold mb-2">Do you work with existing systems?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We specialize in integrating with legacy systems and can work with virtually any platform or technology stack.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What's included in ongoing support?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our support includes 24/7 monitoring, regular maintenance, issue resolution, and system updates to ensure optimal performance.
              </p>
              
              <h3 className="font-semibold mb-2">How do you ensure data security?</h3>
              <p className="text-muted-foreground text-sm">
                We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like SOC 2.
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
