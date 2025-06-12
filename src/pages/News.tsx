
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      date: "December 10, 2024",
      title: "CloudSync Partners with Microsoft Azure for Enhanced Integration Solutions",
      excerpt: "We're excited to announce our expanded partnership with Microsoft Azure, bringing new capabilities to our integration platform...",
      category: "Partnership"
    },
    {
      date: "November 28, 2024",
      title: "New Security Features: End-to-End Encryption for All Data Transfers",
      excerpt: "Enhanced security measures now protect all data in transit with military-grade encryption protocols...",
      category: "Security"
    },
    {
      date: "November 15, 2024",
      title: "Case Study: How TechCorp Reduced Operational Costs by 40%",
      excerpt: "Learn how our cloud migration and system integration helped TechCorp streamline operations and cut costs...",
      category: "Case Study"
    },
    {
      date: "October 30, 2024",
      title: "CloudSync Achieves SOC 2 Type II Certification",
      excerpt: "We're proud to announce our SOC 2 Type II certification, demonstrating our commitment to security and compliance...",
      category: "Certification"
    },
    {
      date: "October 18, 2024",
      title: "Introducing Real-Time Analytics Dashboard",
      excerpt: "Monitor your integrations and system performance with our new real-time analytics and reporting dashboard...",
      category: "Product Update"
    },
    {
      date: "September 25, 2024",
      title: "Best Practices for Cloud Migration in 2024",
      excerpt: "Our comprehensive guide to successful cloud migration strategies, featuring lessons learned from 100+ projects...",
      category: "Guide"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Partnership': 'bg-blue-100 text-blue-800',
      'Security': 'bg-red-100 text-red-800',
      'Case Study': 'bg-green-100 text-green-800',
      'Certification': 'bg-purple-100 text-purple-800',
      'Product Update': 'bg-orange-100 text-orange-800',
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
            Latest News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest developments, partnerships, and industry insights
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
                Read More
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </article>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to receive the latest news and insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
