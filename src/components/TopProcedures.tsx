import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const TopProcedures = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20";
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayDelay, setAutoPlayDelay] = useState(4000);
  const scrollRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const procedures = [
    {
      title: "Ninfoplastia",
      subtitle: "Harmonização dos Pequenos Lábios",
      description: "Procedimento mais procurado para redução e harmonização dos pequenos lábios.",
      benefits: [
        "Resultados naturais",
        "Procedimento rápido",
        "Recuperação tranquila",
        "Aumento da autoconfiança"
      ],
      image: "/images/procedures/1.png",
      popular: true
    },
    {
      title: "Clareamento Íntimo",
      subtitle: "Recupere a Tonalidade Natural",
      description: "Tratamento seguro e eficaz para uniformizar a tonalidade da região íntima.",
      benefits: [
        "Resultados visíveis",
        "Indolor",
        "Rápida aplicação",
        "Pele uniforme"
      ],
      image: "/images/procedures/2.png",
      popular: true
    },
    {
      title: "Preenchimento Íntimo",
      subtitle: "Rejuvenescimento e Volume",
      description: "Devolve volume, firmeza e elasticidade à região íntima.",
      benefits: [
        "Rejuvenescimento",
        "Maior sensibilidade",
        "Efeito imediato",
        "Resultados duradouros"
      ],
      image: "/images/procedures/3.png",
      popular: true
    }
  ];

// Substitua o useEffect atual do autoplay por este:

// SUBSTITUA o useEffect do autoplay por este:

useEffect(() => {
  if (!isMobile) return;

  let isUserScrolling = false;
  let touchStartX = 0;
  let lastScrollTime = Date.now();

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    isUserScrolling = false;
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const diffX = Math.abs(touchX - touchStartX);
    
    // Detecta arraste horizontal significativo (>15px)
    if (diffX > 15 && !isUserScrolling) {
      isUserScrolling = true;
      
      // Pausa imediatamente o autoplay atual
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      
      // Reinicia com 9 segundos após 500ms de delay
      setTimeout(() => {
        startAutoPlay(9000);
      }, 500);
    }
  };

  const startAutoPlay = (delay = 4000) => {
    // Limpa qualquer intervalo existente
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      const now = Date.now();
      
      // Previne execução muito rápida (mínimo 1 segundo entre transições)
      if (now - lastScrollTime < 1000) {
        return;
      }

      setCurrentIndex((prev) => {
        const next = (prev + 1) % procedures.length;
        
        if (scrollRef.current) {
          const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
          scrollRef.current.scrollTo({
            left: cardWidth * next,
            behavior: 'smooth'
          });
          
          lastScrollTime = Date.now();
        }
        
        return next;
      });
    }, delay);
  };

  // Inicia o autoplay padrão
  startAutoPlay(4000);

  // Adiciona event listeners
  const container = scrollRef.current;
  if (container) {
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
  }

  return () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (container) {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    }
  };
}, [isMobile, procedures.length]); // REMOVA autoPlayDelay das dependências

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    
    try {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error('Scroll error:', error);
    }
  };



const handleScroll = () => {
  if (!scrollRef.current || !isMobile) return;
  
  const scrollLeft = scrollRef.current.scrollLeft;
  const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
  const calculatedIndex = Math.round(scrollLeft / cardWidth);
  
  // Só atualiza se realmente mudou de card
  if (calculatedIndex >= 0 && calculatedIndex < procedures.length && calculatedIndex !== currentIndex) {
    setCurrentIndex(calculatedIndex);
  }
};

  const ProcedureCard = ({ procedure, index }) => (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: isMobile ? 0 : index * 0.1, duration: 0.5 }}
     
    >
      <div className="group relative h-full">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D6B07A] to-[#c9a569] rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
        
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
          {/* Header com imagem MAIOR */}
          <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#f7f7eb] to-[#ebe9dd]">
            <img 
              src={procedure.image} 
              alt={procedure.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {procedure.popular && (
              <div className="absolute top-2 right-2 bg-gradient-to-r from-[#D6B07A] to-[#c9a569] text-white px-2.5 py-1 rounded-full font-bold text-[10px] shadow-lg flex items-center gap-1 relative overflow-hidden shine-badge">
                <Sparkles className="w-3 h-3 relative z-10" />
                <span className="relative z-10">DESTAQUE</span>
              </div>
            )}
          </div>

          {/* Conteúdo */}
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            {/* Título */}
            <div className="mb-3">
              <h3 className="text-lg md:text-xl font-serif font-bold text-brand-dark mb-0.5 leading-tight">
                {procedure.title}
              </h3>
              <p className="text-[#D6B07A] font-semibold text-xs">
                {procedure.subtitle}
              </p>
            </div>

            <p className="text-brand-muted mb-3 leading-snug text-xs md:text-sm">
              {procedure.description}
            </p>

            {/* Benefícios */}
            <div className="space-y-1.5 mb-4 flex-1">
              {procedure.benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 text-brand-dark"
                >
                  <div className="w-4 h-4 rounded-md bg-gradient-to-br from-[#D6B07A] to-[#c9a569] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              className="w-full bg-gradient-to-r from-[#D6B07A] to-[#c9a569] hover:from-[#c9a569] hover:to-[#D6B07A] text-white font-bold py-3 md:py-4 rounded-xl group/btn shadow-md hover:shadow-xl transition-all duration-300 text-sm"
              onClick={() => window.open(`${whatsappLink}${procedure.title}`, '_blank')}
            >
              <span className="flex items-center justify-center">
                Quero Saber Mais
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding-lg bg-[#f7f7eb] relative overflow-hidden">
      {/* Elementos decorativos apenas desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-[#D6B07A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-[#c9a569]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        {/* Título */}
        <motion.div
          className="text-center mb-8 md:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D6B07A] to-[#c9a569] text-white px-4 py-2 rounded-full mb-3 md:mb-6 shadow-lg relative overflow-hidden shine-badge text-xs md:text-sm">
            <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 relative z-10" />
            <span className="font-bold tracking-wide uppercase relative z-10">Procedimentos em Destaque</span>
          </div>
          <h2 className="text-2xl md:text-6xl font-serif font-bold text-brand-dark mb-2 md:mb-6">
            Escolha Sua <span className="text-[#D6B07A]">Transformação</span>
          </h2>
          <p className="text-sm md:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            Os procedimentos preferidos pelas nossas pacientes
          </p>
        </motion.div>

        {/* Mobile: Scroll horizontal com indicadores */}
        <div className="md:hidden relative">
          {/* Indicador de swipe animado */}
          <div className="absolute -top-6 right-8 z-20 flex items-center gap-1">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center"
            >
              <ChevronRight className="w-4 h-4 text-[#D6B07A]" />
              <ChevronRight className="w-4 h-4 text-[#D6B07A] -ml-2" />
              <ChevronRight className="w-4 h-4 text-[#D6B07A] -ml-2" />
            </motion.div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {procedures.map((procedure, index) => (
              <ProcedureCard key={index} procedure={procedure} index={index} />
            ))}
          </div>
          
          {/* Indicadores modernos com progresso */}
          <div className="flex justify-center gap-2 mt-6 px-4">
            {procedures.map((_, index) => (
              <div 
                key={index} 
                className="relative h-1 flex-1 max-w-[60px] bg-[#D6B07A]/20 rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#D6B07A] to-[#c9a569] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: currentIndex === index ? '100%' : '0%'
                  }}
                  transition={{ 
                    duration: currentIndex === index ? autoPlayDelay / 1000 : 0.3,
                    ease: 'linear'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Texto de instrução sutil */}
          <p className="text-center text-[#5a4a3a]/60 text-xs mt-3">
            Deslize para ver mais procedimentos
          </p>
        </div>

        {/* Desktop: Grid normal */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} procedure={procedure} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProcedures;