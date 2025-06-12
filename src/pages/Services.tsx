
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cloud, Database, Shield, Zap, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your legacy systems to modern cloud platforms with minimal downtime and maximum efficiency.",
      features: ["AWS, Azure, GCP expertise", "Zero-downtime migrations", "Cost optimization", "Performance monitoring"]
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Connect disparate business systems to create unified workflows and eliminate data silos.",
      features: ["API development", "Real-time data sync", "Custom connectors", "Workflow automation"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement enterprise-grade security measures and ensure compliance with industry standards.",
      features: ["Data encryption", "Access controls", "Compliance auditing", "Security monitoring"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your systems for peak performance, scalability, and reliability.",
      features: ["Load balancing", "Auto-scaling", "Performance tuning", "Monitoring & alerting"]
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Strategic guidance to align your technology stack with business objectives.",
      features: ["Technology roadmaps", "Architecture design", "Best practices", "Training & support"]
    },
    {
      icon: Settings,
      title: "Ongoing Support",
      description: "24/7 monitoring and support to ensure your systems run smoothly and efficiently.",
      features: ["24/7 monitoring", "Proactive maintenance", "Issue resolution", "Regular updates"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud consulting and integration services to transform your business operations
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
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss your specific needs and create a custom solution for your business.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
