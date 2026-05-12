import { CheckCircle2, Users, Briefcase, Globe } from 'lucide-react';
import solucionImage from "@/assets/Solucion_Image_mgp.png";

export default function Solution() {
  const pillars = [
    {
      icon: Users,
      title: 'Legal y Administrativa',
      description: 'Visados, permisos, plazos con la Administracion. Cada paso tiene su procedimiento. Nuestros abogados colegiados garantizan el cumplimiento normativo.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Operativa',
      description: 'Contratos, documentacion, coordinacion entre pais de origen y destino. Gestion integral del proceso desde el inicio hasta la llegada del trabajador.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Humana',
      description: 'Alojamiento, acogida, integracion. El factor que mas afecta a la retencion. Acompanamiento 360 en la adaptacion del trabajador.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="solucion" className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wide">
              Nuestra Propuesta
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 accent-line">
            Planificacion integral en tres pilares
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cuando contratas a una persona del extranjero, estas incorporando a alguien que llega sin red de apoyo, sin familia cerca, sin conocimiento del entorno. Esto no es un problema, pero si requiere planificacion estrategica.
          </p>
        </div>

        {/* Imagen de solucion */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-corporate-lg animate-slideInRight">
          <img
            src={solucionImage}
            alt="Equipo multidisciplinario de MGP"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tres pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-corporate hover-lift border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mensaje diferenciador */}
        <div className="bg-white rounded-xl p-8 md:p-12 border-l-4 border-primary shadow-corporate animate-fadeInUp">
          <div className="flex gap-4">
            <CheckCircle2 size={32} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                La empresa que planifica la llegada, retiene al trabajador.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La que improvisa, lo pierde. Por eso en MGP no somos una gestoria mas. Somos un partner estrategico que acompana cada fase: desde la eleccion de la via legal correcta hasta la integracion del trabajador en su nuevo entorno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
