import { Users, Globe, Heart, Award, MapPin, Shield } from 'lucide-react';


export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Equipo Multidisciplinar',
      description: 'Inmigracion, derecho laboral, fiscal y mercantil bajo un mismo techo. Garantia juridica real.',
    },
    {
      icon: Globe,
      title: 'Preseleccion en Origen',
      description: 'Identificamos y evaluamos candidatos en el pais de origen con criterios psico-laborales estructurados.',
    },
    {
      icon: Shield,
      title: 'Gestion Integral',
      description: 'Desde la eleccion de la via legal hasta la obtencion del permiso y la llegada del trabajador a Espana.',
    },
    {
      icon: MapPin,
      title: 'Red Internacional',
      description: 'Presencia directa en 11 paises. Los principales mercados de origen de talento.',
    },
    {
      icon: Heart,
      title: 'Seguimiento Continuo',
      description: 'Acompanamiento 360: renovaciones, cambios de situacion e integracion del trabajador.',
    },
    {
      icon: Award,
      title: 'Respaldados por MSH-Global',
      description: 'Mas de 25 anos de trayectoria en movilidad internacional. Experiencia probada.',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wide">
              Lo Que Nos Diferencia
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 accent-line">
            No somos una gestoria. Somos un partner estrategico.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MGP es la infraestructura de movilidad internacional para empresas que necesitan incorporar talento cualificado del extranjero con garantias reales.
          </p>
        </div>


        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-corporate hover-lift border border-border animate-fadeInUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Delegacion Cadiz */}
        <div className="mt-16 bg-white rounded-xl p-8 md:p-12 shadow-corporate border-l-4 border-accent animate-slideInLeft">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Delegacion Territorial en Cadiz
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Presencia local con Ramon de la Rosa para atender a las empresas de la provincia. Conocimiento del mercado local combinado con expertise internacional.
              </p>
              <div className="space-y-3">
                <p className="text-foreground">
                  <span className="font-heading font-bold">Ramon de la Rosa</span>
                  <br />
                  <span className="text-muted-foreground">Delegado Cadiz</span>
                </p>
                <p className="text-primary font-heading font-semibold">
                  cadiz@movilidadglobaldepersonas.com
                </p>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <MapPin size={64} className="text-white opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
