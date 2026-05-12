import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032410723/BacJLYRJ9vtFQNnqCZBuMr/mgp-hero-global-talent-it8n2Htxr7QNPrvRqJcNk6.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Etiqueta */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fadeInUp">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-white uppercase tracking-wide">
              Soluciones de Movilidad Internacional
            </span>
          </div>

          {/* Titulo */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight animate-slideInLeft">
            Contrata el talento global que tu empresa necesita
          </h1>

          {/* Subtitulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl animate-slideInRight">
            La escasez de talento es un hecho. La solucion es planificar. MGP te acompana en cada paso de la contratacion internacional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => scrollToSection('solucion')}
              className="px-8 py-4 bg-accent text-white rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all hover-lift flex items-center justify-center gap-2 group"
            >
              Descubre Nuestra Solucion
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-white text-primary rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all hover-lift"
            >
              Habla con Nosotros
            </button>
          </div>

          {/* Estadisticas rapidas */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">48%</div>
              <p className="text-sm md:text-base text-white/80">Empresas con dificultades de mano de obra en Espana</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">63%</div>
              <p className="text-sm md:text-base text-white/80">En Europa no encuentran perfiles suficientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">11</div>
              <p className="text-sm md:text-base text-white/80">Paises en nuestra red internacional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}
