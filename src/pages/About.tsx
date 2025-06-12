
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Certifications", value: "25+" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Cloud Architect",
      description: "15+ years in enterprise cloud solutions and system architecture."
    },
    {
      name: "Michael Chen",
      role: "Integration Specialist",
      description: "Expert in API development and system connectivity across platforms."
    },
    {
      name: "Emily Rodriguez",
      role: "Security Consultant",
      description: "Specialized in cloud security and compliance frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About CloudSync
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about helping businesses unlock the full potential of cloud technology 
            through seamless system integrations and expert consulting.
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2014, CloudSync emerged from a simple observation: businesses were struggling 
              to make their various systems work together effectively. We saw companies with powerful 
              individual tools that couldn't communicate, leading to inefficiencies and missed opportunities.
            </p>
            <p className="text-muted-foreground mb-4">
              Our founders, with decades of combined experience in enterprise software and cloud technologies, 
              set out to bridge these gaps. Today, we've helped over 150 companies transform their operations 
              through intelligent system integration and cloud migration strategies.
            </p>
            <p className="text-muted-foreground">
              We believe that technology should work for your business, not against it. Every integration 
              we design is built with your specific needs in mind, ensuring maximum efficiency and scalability.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-foreground font-medium">
                "To empower businesses by creating seamless connections between their systems, 
                enabling them to focus on what they do best while we handle the technical complexity."
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We stay at the forefront of cloud technology to bring you cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Our solutions are built for stability, security, and long-term success.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  We work closely with you as a trusted partner, not just a service provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
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
