import { CheckCircle2 } from 'lucide-react';
import imagenMetod from "@/assets/Metod_Image_mgp.png"

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Solicitud',
      description: 'Inicio del proceso de aplicacion. Definicion clara de perfiles y requisitos.',
      duration: '2-4 semanas',
    },
    {
      number: 2,
      title: 'Seleccion',
      description: 'Proceso de seleccion similar a uno local. Equipos locales expertos en RRHH.',
      duration: '2-4 semanas',
    },
    {
      number: 3,
      title: 'Visado',
      description: 'Solicitud de cita consular y acompanamiento en el proceso del visado en el pais de origen.',
      duration: '4-8 semanas',
    },
    {
      number: 4,
      title: 'Llegada a Espana',
      description: 'Procesamiento y aprobacion de documentos. Solicitud de tarjeta de residencia.',
      duration: '2-4 semanas',
    },
    {
      number: 5,
      title: 'Seguimiento y Bienestar',
      description: 'Aviso de renovaciones, gestion de cambios de puesto y apoyo a la integracion del trabajador.',
      duration: 'Continuo',
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wide">
              Metodologia Probada
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 accent-line">
            El proceso completo, paso a paso
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde la solicitud inicial hasta el seguimiento post-llegada. Cada fase esta diseñada para minimizar riesgos y maximizar el exito de la integracion.
          </p>
        </div>

        {/* Imagen del proceso */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-corporate-lg animate-slideInLeft">
          <img
            src={imagenMetod}
            alt="Proceso de contratacion internacional"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Timeline de pasos */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Numero y linea */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-lg shadow-corporate">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-accent mt-4"></div>
                )}
              </div>

              {/* Contenido */}
              <div className="pb-6 flex-1">
                <div className="bg-white border border-border rounded-xl p-6 shadow-corporate hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold text-foreground">{step.title}</h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-heading font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje importante */}
        <div className="mt-16 bg-accent/10 border border-accent/30 rounded-xl p-8 md:p-12 animate-slideInRight">
          <div className="flex gap-4">
            <CheckCircle2 size={32} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Planificacion anticipada es fundamental
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Los plazos no dependen solo de nosotros. Dependen de las administraciones publicas. Por eso la planificacion anticipada es fundamental. Si necesitas al trabajador en septiembre, empieza en mayo. Cada semana de retraso en iniciar el proceso es una semana mas de espera al final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
