import { ArrowRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/assets/dra-helana-hero.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helana%20Cardoso";
  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-background pt-20 px-4 md:px-8">
      {/* Decorative Elements with Parallax */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge 5.0 - NOVO: Elegante e Sofisticado */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-soft border border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-baseline gap-1.5 border-l border-border pl-3">
                  <p className="text-2xl font-bold text-foreground leading-none">5.0</p>
                  <p className="text-xs font-medium text-muted-foreground">Avaliado no Google</p>
                </div>
              </div>
            </motion.div>
            
            {/* Headline with Typing Effect */}
            <div className="space-y-4">
              <motion.h1 
                className="text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    'Sua Saúde Íntima',
                    1000,
                    'Sua Saúde Íntima Merece',
                    1000,
                    'Sua Saúde Íntima Merece Cuidado Especializado',
                    3000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="block"
                />
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Dra. Helana Cardoso
              </motion.p>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Ginecologista e Obstetra | Especialista em Estética Íntima
              </motion.p>

              {/* LOCALIZAÇÃO SEMPRE VISÍVEL */}
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-primary/10 rounded-full border-2 border-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-sm sm:text-base font-semibold text-primary">Águas Claras, Brasília - DF</span>
                <button
                  onClick={() => window.open(googleMapsLink, '_blank')}
                  className="text-xs sm:text-sm text-primary hover:text-primary/80 underline"
                >
                  Ver Localização
                </button>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Especialista em procedimentos estéticos íntimos e ginecológicos. 
              Atendimento humanizado, acolhedor e sem julgamentos.
            </motion.p>
            
            {/* MEGA CTA WHATSAPP - IMPOSSÍVEL IGNORAR */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-accent via-primary to-accent hover:from-primary hover:via-accent hover:to-primary text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-12 lg:py-8 rounded-xl sm:rounded-2xl border-2 border-accent/30 hover:scale-105 min-h-[52px] sm:min-h-[56px]"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📱 Agendar Consulta
                  <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </Button>
            </motion.div>
            
            {/* Trust Indicators with Animated Counters */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 border-t-2 border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary">
                  <CountUp
                    end={6555}
                    duration={2.5}
                    separator="."
                    suffix="+"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground font-semibold mt-0.5 sm:mt-1">Seguidores</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-accent">
                  <CountUp
                    end={5.0}
                    duration={2.5}
                    decimals={1}
                    suffix="⭐"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground font-semibold mt-0.5 sm:mt-1">Google</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary">8+</p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground font-semibold mt-0.5 sm:mt-1">Anos</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image with Hover Effect */}
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-elegant max-w-md mx-auto lg:max-w-none"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Dra. Helana Cardoso - Ginecologista especializada em estética íntima"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
            
            {/* Floating Card with Animation */}
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-2xl shadow-elegant border border-border hidden sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 fill-accent text-accent" />
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">Atendimento Humanizado</p>
                  <p className="text-sm text-muted-foreground">Ambiente acolhedor</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Role para baixo</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
