
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-2xl font-space font-bold text-foreground hover:opacity-80 transition-opacity">
          olaQL
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#manifesto" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Manifesto
          </a>
          <a href="#aplicacoes" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Aplicações
          </a>
          <Button asChild className="bg-gradient-to-r from-olaql-lilac to-olaql-blue text-foreground hover:opacity-90 transition-all">
            <a href="#contato">Converse com a olaQL</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-foreground p-2"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-white/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}
      >
        <div className="container py-6 flex flex-col space-y-6">
          <a 
            href="#manifesto" 
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Manifesto
          </a>
          <a 
            href="#aplicacoes" 
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Aplicações
          </a>
          <Button 
            asChild 
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-olaql-lilac to-olaql-blue text-foreground hover:opacity-90 transition-all w-full"
          >
            <a href="#contato">Converse com a olaQL</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
