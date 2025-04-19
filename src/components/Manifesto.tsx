
import React from 'react';

const Manifesto = () => {
  return (
    <section id="manifesto" className="section-padding relative overflow-hidden fade-in-section">
      <div className="container">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
            Manifesto
          </h2>
          
          <div className="space-y-12 text-xl md:text-2xl font-light text-center">
            <p className="leading-relaxed fade-in-section">
              <span className="block text-gradient-purple">Quantum Learning essencial.</span>
            </p>
            
            <p className="leading-relaxed fade-in-section">
              <span className="block text-gradient-blue">Leve por fora, revolucionária por dentro.</span>
            </p>
            
            <p className="leading-relaxed fade-in-section">
              <span className="block text-gradient-lilac">Engenharia do aprendizado quântico aplicado para sistemas reais.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-olaql-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Manifesto;
