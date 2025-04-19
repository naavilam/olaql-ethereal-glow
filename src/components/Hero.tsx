
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background animation */}
      <BackgroundAnimation />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-olaql-lilac to-olaql-blue">
              olaQL
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 font-space animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            A inteligência que começa com um olá.
          </p>
          
          <div 
            className="flex flex-col md:flex-row gap-4 justify-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-olaql-lilac to-olaql-blue text-foreground hover:opacity-90 transition-all px-8 py-6 rounded-full text-lg">
              <a href="#contato">Converse com a olaQL</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-olaql-lilac text-foreground hover:bg-olaql-lilac/10 transition-all px-8 py-6 rounded-full text-lg">
              <a href="#manifesto">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <a href="#manifesto" className="text-foreground/60 hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
