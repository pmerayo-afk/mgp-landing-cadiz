import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-corporate">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-display text-lg font-bold">MGP</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-heading font-bold text-foreground">MGP</h1>
            <p className="text-xs text-muted-foreground">Movilidad Global</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('problema')}
            className="text-sm font-heading text-foreground hover:text-primary transition-colors"
          >
            El Problema
          </button>
          <button
            onClick={() => scrollToSection('solucion')}
            className="text-sm font-heading text-foreground hover:text-primary transition-colors"
          >
            Nuestra Solución
          </button>
          <button
            onClick={() => scrollToSection('proceso')}
            className="text-sm font-heading text-foreground hover:text-primary transition-colors"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="text-sm font-heading text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all hover-lift"
          >
            Contacto
          </button>
        </nav>
 
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-left text-sm font-heading text-foreground hover:text-primary transition-colors py-2"
            >
              El Problema
            </button>
            <button
              onClick={() => scrollToSection('solucion')}
              className="text-left text-sm font-heading text-foreground hover:text-primary transition-colors py-2"
            >
              Nuestra Solución
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className="text-left text-sm font-heading text-foreground hover:text-primary transition-colors py-2"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-left text-sm font-heading text-foreground hover:text-primary transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all"
            >
              Contacto
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
