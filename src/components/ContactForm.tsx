
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando envio de formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
      duration: 5000,
    });
    
    // Limpar formulário
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-olaql-lilac/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-olaql-blue/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Converse com a olaQL
            </h2>
            
            <p className="text-center text-foreground/80 mb-8">
              Estamos ansiosos para transformar sua visão em realidade com nossa inteligência quântica.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="bg-white/50 border-white/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-white/50 border-white/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  required
                  className="bg-white/50 border-white/30 min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-olaql-lilac to-olaql-blue text-foreground hover:opacity-90 transition-all py-6"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
