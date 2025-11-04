import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Location = () => {
  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helana%20Cardoso";
  
  return (
    <section id="localizacao" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/30">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary">ONDE NOS ENCONTRAR</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Localização e Contato
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos em Águas Claras, Brasília-DF, prontos para cuidar da sua saúde íntima
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Google Maps Embed - GRANDE E DESTAQUE */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-primary/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-48.02!3d-15.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33b3618f8f59%3A0xb87f2e3c4d1a5f6e!2sAv.%20Pau%20Brasil%2C%2010%20-%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-%20DF%2C%2071926-000!5e0!3m2!1spt-BR!2sbr!4v1730000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Dra. Helana Cardoso - Av. Pau Brasil, 10 - Sala 1912, Águas Claras, Brasília - DF"
            />
            
            {/* Overlay Button */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <Button
                size="lg"
                className="w-full bg-white/95 hover:bg-white text-primary font-bold shadow-xl backdrop-blur-sm text-sm sm:text-base py-4 sm:py-6"
                onClick={() => window.open(googleMapsLink, '_blank')}
              >
                <Navigation className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Abrir no Google Maps
              </Button>
            </div>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-primary/20 hover-lift">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Endereço</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-semibold">
                    Av. Pau Brasil, 10 - Sala 1912
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Águas Claras, Brasília - DF
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    CEP: 71926-000
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-accent/20 hover-lift">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Horário de Atendimento</h3>
                  <div className="space-y-2 text-base sm:text-lg">
                    <p className="text-muted-foreground flex justify-between gap-2">
                      <span className="font-semibold">Seg a Qui:</span>
                      <span>9h - 18h</span>
                    </p>
                    <p className="text-muted-foreground flex justify-between gap-2">
                      <span className="font-semibold">Sexta:</span>
                      <span>9h - 17h</span>
                    </p>
                    <p className="text-muted-foreground flex justify-between gap-2">
                      <span className="font-semibold">Sáb/Dom:</span>
                      <span className="text-rose-500">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Entre em Contato</h3>
                  <p className="text-base text-muted-foreground mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    (61) 99104-9924
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agende sua consulta de forma rápida e prática pelo WhatsApp
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold shadow-lg text-lg py-6"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    <MessageCircleIcon className="mr-2 w-6 h-6" />
                    Falar no WhatsApp Agora
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info Cards */}
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-6 rounded-2xl border border-border text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">🚗</span>
            </div>
            <h4 className="font-bold text-foreground text-lg mb-2">Estacionamento</h4>
            <p className="text-sm text-muted-foreground">Conveniado no local</p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-accent">♿</span>
            </div>
            <h4 className="font-bold text-foreground text-lg mb-2">Acessibilidade</h4>
            <p className="text-sm text-muted-foreground">Ambiente acessível</p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">✨</span>
            </div>
            <h4 className="font-bold text-foreground text-lg mb-2">Ambiente Moderno</h4>
            <p className="text-sm text-muted-foreground">Confortável e discreto</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Simple icon component
const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Location;
