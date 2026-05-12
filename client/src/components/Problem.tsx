import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count}
      {suffix}
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problema" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wide">
              La Realidad del Mercado
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 accent-line">
            No es una moda. Es una tendencia estructural.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La escasez de talento no es un problema temporal ni exclusivo de tu empresa. Es un fenomeno europeo que afecta a sectores clave: industria, hosteleria, construccion, logistica, sanidad y tecnologia.
          </p>
        </div>

        {/* Estadisticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1 */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 shadow-corporate hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-heading text-muted-foreground uppercase tracking-wide">Espana 2025</p>
              </div>
            </div>
            <Counter end={48} duration={2} suffix="%" />
            <p className="text-muted-foreground mt-4 leading-relaxed">
              de las empresas encuestadas ven dificultades asociadas a la mano de obra. El maximo registrado desde 2020.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Fuente: Banco de Espana, EBAE Q4 2025</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 shadow-corporate hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-heading text-muted-foreground uppercase tracking-wide">Europa 2024</p>
              </div>
            </div>
            <Counter end={63} duration={2} suffix="%" />
            <p className="text-muted-foreground mt-4 leading-relaxed">
              de las pequenas y medianas empresas no logran encontrar los perfiles profesionales que necesitan.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Fuente: Comision Europea, Plan de Accion 2024</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 shadow-corporate hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-heading text-muted-foreground uppercase tracking-wide">Comision Europea</p>
              </div>
            </div>
            <Counter end={42} duration={2} suffix="" />
            <p className="text-muted-foreground mt-4 leading-relaxed">
              profesiones en las que existe escasez acreditada en toda Europa. La necesidad es global.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Fuente: Comision Europea, 2024</p>
          </div>
        </div>

        {/* Mensaje clave */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border-l-4 border-accent animate-slideInLeft">
          <p className="text-lg md:text-xl font-heading text-foreground leading-relaxed">
            <span className="font-bold text-primary">La contratacion internacional ha dejado de ser una opcion</span> para convertirse en una necesidad operativa real. El mercado local no llega. El talento es global. No es el plan B. <span className="font-bold text-accent">Es el plan estrategico.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
