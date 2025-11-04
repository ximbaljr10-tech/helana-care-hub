import { MapPin, Phone, Instagram, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappLink = "https://wa.me/message/NPI4MNZIT1TP";
  const instagramLink = "https://instagram.com/dra.helianacardoso";
  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pronta Para Cuidar da Sua Saúde Íntima?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agende sua consulta e dê o primeiro passo para se sentir mais confiante e saudável
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {/* WhatsApp Card */}
            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border shadow-soft hover-lift animate-fade-in-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">Agende sua consulta de forma rápida e prática</p>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Conversar no WhatsApp
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Instagram Card */}
            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border shadow-soft hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground">Siga para dicas de saúde íntima e novidades</p>
                  <p className="text-sm text-primary font-medium mt-1">@dra.helianacardoso</p>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                onClick={() => window.open(instagramLink, '_blank')}
              >
                Seguir no Instagram
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Location */}
            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Localização</h4>
              <p className="text-sm text-muted-foreground mb-3">Recife - PE</p>
              <button
                className="text-sm text-primary hover:text-primary/80 transition-colors underline"
                onClick={() => window.open(googleMapsLink, '_blank')}
              >
                Ver no Google Maps
              </button>
            </div>

            {/* CRM */}
            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-accent">Dra</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">CRM/PE</h4>
              <p className="text-sm text-muted-foreground">6079</p>
              <p className="text-xs text-muted-foreground mt-1">Ginecologia e Obstetrícia</p>
            </div>

            {/* Hours */}
            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Atendimento</h4>
              <p className="text-sm text-muted-foreground">Segunda a Sexta</p>
              <p className="text-xs text-muted-foreground mt-1">Horários flexíveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
