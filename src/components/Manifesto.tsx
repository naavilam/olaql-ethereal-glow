
import React from 'react';

const Manifesto = () => {
  return (
    <section id="manifesto" className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="glass-card p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Manifesto
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl font-light text-center">
            <p className="leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Simulamos a realidade com gentileza.
            </p>
            
            <p className="leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Aprendemos com o invisível para transformar o visível.
            </p>
            
            <p className="leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              olaQL é leve por fora, essencial por dentro.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background circle */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-olaql-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-olaql-lilac/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Manifesto;
