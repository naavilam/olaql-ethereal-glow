
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-space font-bold text-foreground hover:opacity-80 transition-opacity">
              olaQL
            </a>
            <p className="text-foreground/60 mt-2">
              A inteligência que começa com um olá.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#manifesto" className="text-foreground/80 hover:text-foreground transition-colors text-center md:text-left">
              Manifesto
            </a>
            <a href="#aplicacoes" className="text-foreground/80 hover:text-foreground transition-colors text-center md:text-left">
              Aplicações
            </a>
            <a href="#contato" className="text-foreground/80 hover:text-foreground transition-colors text-center md:text-left">
              Contato
            </a>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center md:text-left text-foreground/60">
          <p>&copy; {currentYear} olaQL. Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-olaql-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-olaql-lilac/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
