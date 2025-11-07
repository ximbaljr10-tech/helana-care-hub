import { ArrowRight, Star, Sparkles, Check, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/dra-helana-hero.png";

const HeroNew = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helana%20Cardoso";
  const [isMobile, setIsMobile] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { number: "+2000", label: "Mulheres Transformadas" },
    { number: "5.0⭐", label: "Avaliação Google" },
    { number: "8+", label: "Anos Experiência" }
  ];

  // Auto-rotate stats no mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, stats.length]);
  
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#f7f7eb] pt-24 md:pt-32 pb-8 md:pb-0">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D6B07A]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#c9a569]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-4 md:space-y-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           {/* Badge 5.0 Google - Aumentado no mobile */}
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ 
    delay: 0.2,
    duration: 0.5,
    type: "spring",
    stiffness: 200,
  }}
  className="inline-block"
>
  {/* Aumento do Padding e Gap no Mobile: px-3/py-1.5/gap-1.5 -> px-4/py-2/gap-2 */}
  <div className="inline-flex items-center gap-2 md:gap-2 px-4 md:px-4 py-2 md:py-2 bg-white rounded-full shadow-lg border border-[#D6B07A]/20 relative overflow-hidden shine-badge">
    
    {/* Aumento do Gap e Tamanho das Estrelas no Mobile: gap-0.5 -> gap-1 e w-2.5/h-2.5 -> w-3/h-3 */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-[#D6B07A] text-[#D6B07A]" />
      ))}
    </div>
    
    {/* Aumento da Altura do Separador no Mobile: h-3 -> h-4 */}
    <div className="h-4 md:h-4 w-px bg-[#D6B07A]/30" />
    
    {/* Aumento da Fonte "5.0" no Mobile: text-sm -> text-base */}
    <span className="text-base md:text-lg font-bold text-[#2c2416]">5.0</span>
    
    {/* Aumento da Fonte Secundária no Mobile: text-[10px] -> text-xs */}
    <span className="text-xs md:text-xs font-medium text-[#5a4a3a]">Avaliado no Google</span>
  </div>
</motion.div>
            
            {/* Headline Ultra Moderna - Compacta no mobile */}
            <motion.div 
              className="space-y-2 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-[1.1]">
                Recupere Sua
                <br />
                <span className="text-[#D6B07A] relative inline-block">
                  Autoestima
                  <motion.div
                    className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-3 bg-[#D6B07A]/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                {" "}e{" "}
                <span className="text-[#D6B07A] relative inline-block">
                  Bem-Estar Íntimo
                  <motion.div
                    className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-3 bg-[#D6B07A]/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.6 }}
                  />
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-brand-dark font-semibold">
                Com Procedimentos Estéticos Íntimos Modernos e Seguros
              </p>
            </motion.div>
            
            {/* Benefícios com design cards - Compactos */}
            <motion.div 
              className="grid gap-2 md:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                { icon: Sparkles, text: "Mais confiança na intimidade" },
                { icon: Star, text: "Aumento do prazer e qualidade de vida" },
                { icon: TrendingUp, text: "Resultados naturais e duradouros" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-2.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-[#D6B07A]/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#D6B07A] to-[#c9a569] flex items-center justify-center flex-shrink-0 shadow-md">
                    <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-xs md:text-base font-semibold text-brand-dark">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Ultra Moderno - Compacto no mobile */}
            <motion.div 
              className="pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-[#D6B07A] to-[#c9a569] hover:from-[#c9a569] hover:to-[#D6B07A] text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-xl md:rounded-2xl hover:scale-105"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Agendar Consulta Agora
                  <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl md:rounded-2xl" />
              </Button>
              
              <p className="text-[10px] md:text-sm text-[#5a4a3a] mt-2 md:mt-3 flex items-center gap-1.5 md:gap-2 justify-center sm:justify-start">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-[#D6B07A]" />
                Atendimento personalizado e sigiloso
              </p>
            </motion.div>
            
            {/* Trust Indicators - Carrossel no mobile, grid no desktop */}
            <motion.div 
              className="pt-4 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {/* Mobile: Carrossel */}
              <div className="md:hidden">
                <div className="relative h-24 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStatIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D6B07A]/10 w-full max-w-[280px]">
                        <p className="text-4xl font-black bg-gradient-to-r from-[#D6B07A] to-[#c9a569] bg-clip-text text-transparent text-center">
                          {stats[currentStatIndex].number}
                        </p>
                        <p className="text-xs text-[#5a4a3a] font-semibold mt-1 text-center">
                          {stats[currentStatIndex].label}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Indicadores */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {stats.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentStatIndex === index 
                          ? 'w-6 bg-gradient-to-r from-[#D6B07A] to-[#c9a569]' 
                          : 'w-1.5 bg-[#D6B07A]/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Indicador de swipe */}
                <div className="flex justify-center mt-2">
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center opacity-40"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D6B07A]" />
                    <ChevronRight className="w-3 h-3 text-[#D6B07A] -ml-1.5" />
                    <ChevronRight className="w-3 h-3 text-[#D6B07A] -ml-1.5" />
                  </motion.div>
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-[#D6B07A]/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-[#D6B07A] to-[#c9a569] bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="text-[10px] md:text-xs text-[#5a4a3a] font-semibold mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image - Badge menor no mobile */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decoração atrás da imagem */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-[#D6B07A]/30 to-[#c9a569]/30 rounded-[2.5rem] blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Imagem principal */}
              <motion.div 
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={heroImage} 
                  alt="Dra. Helana Cardoso"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2416]/20 to-transparent" />
              </motion.div>
              
              {/* Badge flutuante - Compacto no mobile */}
             {/* Badge flutuante - Compacto no mobile */}
<motion.div
  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 border border-[#D6B07A]/20"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3, duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
>
  <div className="flex items-center gap-1 md:gap-3">
    {/* Fundo do Ícone */}
    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#D6B07A] to-[#c9a569] flex items-center justify-center flex-shrink-0">
      {/* Ícone */}
      <Sparkles className="w-3 h-3 md:w-6 md:h-6 text-white" />
    </div>
    
    {/* Texto */}
    <div>
      <p className="text-[8px] md:text-xs text-[#5a4a3a] font-medium leading-tight">Especialista em</p>
      <p className="text-[10px] md:text-sm font-bold text-[#2c2416] leading-tight">Estética Íntima</p>
    </div>
  </div>
</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;