import { Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-sm font-bold">MGP</span>
              </div>
              <span className="font-display font-bold text-lg">MGP</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Movilidad Global de Personas. Soluciones integrales para la contratacion de talento internacional.
            </p>
          </div>

          {/* Enlaces rapidos */}
          <div>
            <h4 className="font-heading font-bold mb-4">Enlaces Rapidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problema" className="text-white/70 hover:text-white transition-colors">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="text-white/70 hover:text-white transition-colors">
                  Solucion
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-white/70 hover:text-white transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white/70">Asesoramiento Juridico</span>
              </li>
              <li>
                <span className="text-white/70">Seleccion Internacional</span>
              </li>
              <li>
                <span className="text-white/70">Gestion Migratoria</span>
              </li>
              <li>
                <span className="text-white/70">Integracion Laboral</span>
              </li>
              <li>
                <span className="text-white/70">Seguimiento Continuo</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:cadiz@movilidadglobaldepersonas.com" className="text-white/70 hover:text-white transition-colors">
                  cadiz@movilidadglobaldepersonas.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-accent" />
                <a href="https://www.movilidadglobaldepersonas.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  www.movilidadglobaldepersonas.com
                </a>
              </div>
              <div className="text-white/70">
                <p>Cadiz, Espana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            Copyright {currentYear} MGP - Movilidad Global de Personas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terminos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
