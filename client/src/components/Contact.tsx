import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu interes. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-[900] mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wide">
              Ponte en Contacto
            </span>
          </div>
          <br />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 accent-line">
            La pregunta no es puedo. Es cuando empiezo.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La escasez de talento no va a resolverse sola. Las empresas que hoy planifican su estrategia de contratacion internacional, son las que manana tienen los equipos que necesitan para crecer.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="animate-slideInLeft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Cuentanos sobre tu necesidad..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all hover-lift flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Informacion de contacto */}
          <div className="space-y-8 animate-slideInRight">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-xl p-8 shadow-corporate border border-border hover-lift">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">cadiz@movilidadglobaldepersonas.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white rounded-xl p-8 shadow-corporate border border-border hover-lift">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">Telefono</h3>
                  <p className="text-muted-foreground">Ramon de la Rosa</p>
                  <p className="text-muted-foreground">+34 618 05 81 50</p>
                  <p className="text-sm text-muted-foreground mt-1">Delegado Cadiz</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white rounded-xl p-8 shadow-corporate border border-border hover-lift">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">Ubicacion</h3>
                  <p className="text-muted-foreground">Cadiz, Espana</p>
                  <p className="text-sm text-muted-foreground mt-1">Presencia en 11 paises</p>
                </div>
              </div>
            </div>

            {/* CTA adicional */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
              <h3 className="text-xl font-display font-bold mb-3">
                Web y mas informacion
              </h3>
              <p className="text-white/90 mb-4">
                Visita nuestro sitio web para conocer mas sobre nuestros servicios y casos de exito.
              </p>
              <a
                href="https://www.movilidadglobaldepersonas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-heading font-semibold hover:gap-3 transition-all"
              >
                www.movilidadglobaldepersonas.com
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
