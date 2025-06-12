
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer till dig inom 24 timmar.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Fullständigt namn</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Anna Andersson"
          />
        </div>
        <div>
          <Label htmlFor="email">E-postadress</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="anna@foretag.se"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="company">Företagsnamn</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1"
          placeholder="Ditt Företag AB"
        />
      </div>
      
      <div>
        <Label htmlFor="message">Meddelande</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1"
          rows={4}
          placeholder="Berätta om ditt projekt och integrationsbehov..."
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full">
        Skicka meddelande
      </Button>
    </form>
  );
};

export default ContactForm;
