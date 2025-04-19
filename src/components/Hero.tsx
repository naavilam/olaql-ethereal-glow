
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
          <div className="mb-6 overflow-hidden">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in relative"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-olaql-lilac via-purple-300 to-olaql-blue inline-block">
                olaQL
              </span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p 
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-space animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              A inteligência que começa com um olá.
            </p>
          </div>
          
          <div 
            className="flex flex-col md:flex-row gap-4 justify-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-olaql-lilac via-purple-300 to-olaql-blue text-foreground hover:opacity-90 transition-all px-8 py-6 rounded-full text-lg">
              <a href="#contato">Converse com a olaQL</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-olaql-lilac bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all px-8 py-6 rounded-full text-lg">
              <a href="#manifesto">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <a href="#manifesto" className="text-white/60 hover:text-white transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
