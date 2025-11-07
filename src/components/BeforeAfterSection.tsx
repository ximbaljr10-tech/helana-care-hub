import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Sparkles, ChevronLeft, ChevronRight, Eye, EyeOff, ShieldCheck, Zap } from "lucide-react";
import before1 from '@/assets/before.png';
import after1 from '@/assets/after.png';
import before2 from '@/assets/before-after-3.png';
import after2 from '@/assets/before-after-4.png';
import { useState, useEffect } from "react";

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdult, setIsAdult] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sliderKey, setSliderKey] = useState(0);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);

  const transformations = [
    {
      title: "Clareamento Íntimo - Caso 1",
      beforeImage: before1,
      afterImage: after1,
      type: 'clareamento' as const,
      description: "Uniformização da tonalidade e autoestima renovada"
    },
    {
      title: "Ninfoplastia - Caso 1",
      beforeImage: before2,
      afterImage: after2,
      type: 'ninfoplastia' as const,
      description: "Harmonização dos pequenos lábios com resultado natural"
    }
  ];

  useEffect(() => {
    const confirmed = sessionStorage.getItem('ageConfirmed');
    if (confirmed === 'true') {
      setIsAdult(true);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (!showContent || isPaused) return;

    const interval = setInterval(() => {
      setAutoPlayProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / 90);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [showContent, isPaused, currentIndex]);

  const handleConfirmAge = () => {
    setIsAdult(true);
    setShowUnlockAnimation(true);
    sessionStorage.setItem('ageConfirmed', 'true');
    
    setTimeout(() => {
      setShowContent(true);
      setShowUnlockAnimation(false);
    }, 1500);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setAutoPlayProgress(0);
    setSliderKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setAutoPlayProgress(0);
    setSliderKey(prev => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlayProgress(0);
    setSliderKey(prev => prev + 1);
  };

  return (
    <section data-section="before-after" className="py-16 md:py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm">Resultados Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Antes & Depois <span className="text-primary">Incríveis</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação real de nossas pacientes
          </p>
          {showContent && (
            <motion.p className="text-sm text-primary font-semibold mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              👆 Clique e arraste o círculo branco para comparar
            </motion.p>
          )}
        </motion.div>

        {/* Container */}
        <div className="relative">
          <div className={`transition-all duration-700 ${!showContent ? 'blur-3xl scale-95 pointer-events-none' : 'blur-0 scale-100'}`}>
            
            {/* Mobile */}
            <div className="md:hidden max-w-sm mx-auto">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-foreground mb-1">{transformations[currentIndex].title}</h3>
                  <p className="text-xs text-muted-foreground">{transformations[currentIndex].description}</p>
                </div>

                <div className="w-full aspect-[1300/900]">
                  <BeforeAfterSlider
                    key={`mobile-${sliderKey}`}
                    beforeImage={transformations[currentIndex].beforeImage}
                    afterImage={transformations[currentIndex].afterImage}
                    type={transformations[currentIndex].type}
                    autoPlay={showContent}
                    isPaused={isPaused}
                  />
                </div>

                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-semibold">Resultado Natural</span>
                  </div>
                </div>
              </motion.div>

              {/* Controles Mobile */}
              <div className="flex items-center justify-center gap-4 mt-5">
                <button onClick={prevSlide} className="bg-card border border-border rounded-full p-2 shadow-lg">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                
                <div className="flex gap-2">
                  {transformations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-5' : 'bg-muted'}`}
                    />
                  ))}
                </div>

                <button onClick={nextSlide} className="bg-card border border-border rounded-full p-2 shadow-lg">
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Desktop - FORÇADO MENOR */}
            <div className="hidden md:block">
              <div className="relative max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-2xl p-5 shadow-2xl border border-primary/20"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {/* Header */}
                    <div className="text-center mb-3">
                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full mb-2">
                        <span className="text-xs font-bold text-primary">Caso {currentIndex + 1} de {transformations.length}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{transformations[currentIndex].title}</h3>
                      <p className="text-xs text-muted-foreground">{transformations[currentIndex].description}</p>
                    </div>

                    {/* Slider - TAMANHO FIXO */}
                    <div className="w-full mx-auto rounded-xl overflow-hidden shadow-xl" style={{ maxWidth: '650px', height: '450px' }}>
                      <BeforeAfterSlider
                        key={`desktop-${sliderKey}`}
                        beforeImage={transformations[currentIndex].beforeImage}
                        afterImage={transformations[currentIndex].afterImage}
                        type={transformations[currentIndex].type}
                        autoPlay={showContent}
                        isPaused={isPaused}
                      />
                    </div>

                    {/* Footer */}
                    <div className="mt-3 text-center">
                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-xs font-bold">Resultado Natural e Duradouro</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-3 w-full max-w-md mx-auto">
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${autoPlayProgress}%` }} />
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-1">
                        {isPaused ? 'Pausado' : 'Próximo caso em breve...'}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Botões Laterais */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none">
                  <motion.button
                    onClick={prevSlide}
                    className="pointer-events-auto bg-card hover:bg-primary border-2 border-primary rounded-full p-2.5 shadow-xl group transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.button>

                  <motion.button
                    onClick={nextSlide}
                    className="pointer-events-auto bg-card hover:bg-primary border-2 border-primary rounded-full p-2.5 shadow-xl group transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.button>
                </div>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-5">
                {transformations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-gradient-to-r from-primary to-accent' : 'w-2 h-2 bg-muted'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animação de Desbloqueio */}
          <AnimatePresence>
            {showUnlockAnimation && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Círculos concêntricos */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-4 border-primary rounded-full"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                      transition={{ duration: 1, delay: i * 0.2, repeat: 2 }}
                    />
                  ))}
                  
                  {/* Ícone central */}
                  <motion.div
                    className="relative bg-gradient-to-br from-primary to-accent rounded-full p-8 shadow-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <Zap className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* Partículas */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-primary rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 100,
                        y: Math.sin((i * Math.PI * 2) / 8) * 100,
                      }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay de Verificação */}
          <AnimatePresence>
            {!isAdult && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-background/95 via-primary/5 to-accent/5 backdrop-blur-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />

                {/* Partículas de fundo */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                <motion.div
                  className="relative bg-card/90 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: -20 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  {/* Brilho de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
                  
                  <motion.div
                    className="relative mb-6 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary via-primary to-accent rounded-full shadow-xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(var(--primary), 0.3)",
                        "0 0 40px rgba(var(--primary), 0.5)",
                        "0 0 20px rgba(var(--primary), 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ShieldCheck className="w-12 h-12 text-white" />
                  </motion.div>

                  <motion.h3 
                    className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Conteúdo Sensível
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-1 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Esta seção contém imagens de procedimentos íntimos
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg font-semibold text-foreground mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Você tem mais de 18 anos?
                  </motion.p>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={handleConfirmAge}
                      className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold py-3.5 px-6 rounded-xl shadow-lg overflow-hidden group"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <Eye className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Sim, tenho +18</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                      className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-semibold py-3.5 px-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <EyeOff className="w-4 h-4" />
                      Não, sair
                    </motion.button>
                  </motion.div>

                  <motion.p 
                    className="text-xs text-muted-foreground mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Ao confirmar, você declara ter idade legal para visualizar este conteúdo
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Disclaimer */}
        {showContent && (
          <motion.p
            className="text-center mt-8 text-xs text-muted-foreground italic max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            * Resultados podem variar. Agende uma Consulta para avaliação personalizada.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default BeforeAfterSection;