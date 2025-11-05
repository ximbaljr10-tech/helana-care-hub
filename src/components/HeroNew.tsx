
import { ArrowRight, Star, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/assets/dra-helana-hero.png";

const HeroNew = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helana%20Cardoso";
  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16 md:pt-20 px-4 md:px-8">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-40"
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
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"
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
      
      <div className="container mx-auto px-4 py-8 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge Elegante - REFORÇO DE EXCLUSIVIDADE */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full shadow-lg border border-white/30 shine-pass">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold text-base">Atendimento Exclusivo e Personalizado</span>
                </div>
              </div>
            </motion.div>
            
            {/* Badge 5.0 Google */}
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
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-card backdrop-blur-sm rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-baseline gap-1 sm:gap-1.5 border-l border-border pl-2 sm:pl-3">
                  <p className="text-xl sm:text-2xl font-bold text-foreground leading-none">5.0</p>
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground">Avaliado no Google</p>
                </div>
              </div>
            </motion.div>
            
            {/* Headline Emocional */}
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Recupere Sua <span className="text-primary">Autoestima</span> e <span className="text-primary">Bem-Estar Íntimo</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Com Procedimentos Estéticos Íntimos Modernos e Seguros
              </motion.p>
            </div>
            
            {/* Benefícios Emocionais */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {[
                { icon: Sparkles, text: "Mais confiança na intimidade" },
                { icon: Star, text: "Aumento do prazer e qualidade de vida" },
                { icon: Sparkles, text: "Resultados naturais e duradouros" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-base sm:text-lg text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* MEGA CTA - IMPOSSÍVEL IGNORAR */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:to-primary text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 text-base md:text-xl px-8 py-7 rounded-2xl border-2 border-white/20 hover:scale-105 min-h-[60px]"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Agendar Consulta Agora
                  <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
                </span>
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-row items-center justify-center sm:justify-start gap-6 md:gap-8 pt-6 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-black text-primary">
                  +2000
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold mt-1">Mulheres<br/>Transformadas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-black text-primary">
                  5.0⭐
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold mt-1">Avaliação<br/>Google</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-black text-primary">8+</p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold mt-1">Anos de<br/>Experiência</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none border-4 border-muted"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Dra. Helana Cardoso - Ginecologista especializada em estética íntima"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
