import { motion, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone, Heart, Shield, Star } from "lucide-react";
import { useEffect } from "react";

// Sistema de Brilho Sutil
const SubtleShine = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 opacity-10"
      style={{
        background: `radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(209, 176, 122, 0.15), transparent 50%)`,
      }}
    />
  );
};

// Elementos Flutuantes Suaves
const FloatingElements = () => {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-[#D6B07A]/5 to-[#0F4443]/3"
          style={{
            width: 200 + i * 150,
            height: 200 + i * 150,
            left: `${15 + i * 30}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// Texto com Aparecimento Rápido
const FluidText = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: "easeOut" 
    }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.span>
);

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Quero%20agendar%20minha%20consulta%20ainda%20esta%20semana!";

  return (
    <section className="relative min-h-screen bg-[#f7f7eb] overflow-hidden">
      {/* Sistema de Iluminação Global */}
      <SubtleShine />
      <FloatingElements />
      
      {/* Fundo bege puro */}
      <div className="absolute inset-0 bg-[#f7f7eb]" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          
          {/* Cabeçalho Minimalista */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 bg-[#D6B07A] rounded-full" />
              <span className="text-[#0F4443] font-light tracking-widest text-xs uppercase">
                Jornada Personalizada
              </span>
              <div className="w-1.5 h-1.5 bg-[#D6B07A] rounded-full" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-serif font-light text-secondary mb-6 leading-tight">
              <div>
                <FluidText>Pronta para a sua</FluidText>
              </div>
              <div className="mt-2">
                <FluidText delay={0.1}>trasnformação?</FluidText>
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-[#D6B07A] to-transparent mx-auto my-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-brand-muted font-light leading-relaxed max-w-xl mx-auto">
            
              Não deixe para depois. sua autoestima 
              {' '}<span className="text-secondary font-normal">e bem-estar merecem atenção agora!</span>
            </motion.p>
          </div>

          {/* Cards de Destaque Sutil */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Heart,
                title: "Consulta Humanizada",
                description: "Diálogos que transformam e acolhem"
              },
              {
                icon: Sparkles,
                title: "Resultados Naturais",
                description: "Beleza que floresce de dentro para fora"
              },
              {
                icon: Shield,
                title: "Ambiente Seguro",
                description: "Espaço dedicado ao seu bem-estar"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-gradient-to-br from-white to-[#f7f7eb] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-[#D6B07A]" />
                </motion.div>
                <h3 className="text-secondary font-medium text-base mb-2">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Principal - Luxo Puro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="group relative bg-secondary hover:bg-secondary/90 text-white font-normal text-base px-12 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-secondary/20 shine-pass"
                size="lg"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <Phone className="w-4 h-4" />
                  <span>Iniciar Conversa</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </motion.div>

            {/* Texto sutil abaixo do botão */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-brand-muted/60 text-xs mt-6 font-light">
            
              Transformações que começam com uma conversa
            </motion.p>
          </motion.div>

          {/* Assinatura Discreta */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20 pt-12 border-t border-[#0F4443]/10"
          >
            <div className="flex items-center justify-center gap-3 text-brand-muted">
              <Star className="w-3 h-3" />
              <p className="text-sm font-light">
                Com carinho, <span className="font-serif italic text-primary">Helana</span>
              </p>
              <Star className="w-3 h-3" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elementos Decorativos Flutuantes - Mais Sutis */}
      <motion.div
        className="absolute bottom-32 left-8 w-2 h-2 bg-[#D6B07A]/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-48 right-12 w-1.5 h-1.5 bg-[#0F4443]/15 rounded-full"
        animate={{
          y: [0, -12, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </section>
  );
};

export default FinalCTA;