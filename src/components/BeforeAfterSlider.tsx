import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  type: 'ninfoplastia' | 'clareamento';
  autoPlay?: boolean;
  isPaused?: boolean;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, type, autoPlay = false, isPaused = false }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Auto-play animation
  useEffect(() => {
    if (!autoPlay || hasInteracted || isDragging || isPaused) return;

    let startTime = Date.now();
    const cycleDuration = 9000; // 9 segundos total (3s + 5s + 1s pausa)

    const animate = () => {
      const elapsed = (Date.now() - startTime) % cycleDuration;
      
      if (elapsed < 3000) {
        // 0-3s: Do meio para DIREITA (50% -> 100%) - mostra DEPOIS
        const progress = elapsed / 3000;
        setSliderPosition(50 + (progress * 50));
      } else if (elapsed < 8000) {
        // 3-8s: Da direita para ESQUERDA TOTAL (100% -> 0%) - mostra ANTES (5 segundos)
        const progress = (elapsed - 3000) / 5000;
        setSliderPosition(100 - (progress * 100));
      } else {
        // 8-9s: PAUSA na esquerda (0%)
        setSliderPosition(0);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Esconde hint após 1s
    setTimeout(() => setShowHint(false), 1000);
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoPlay, hasInteracted, isDragging, isPaused]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => isDragging && handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => isDragging && handleMove(e.touches[0].clientX);

  const handleStart = () => {
    setIsDragging(true);
    setHasInteracted(true);
  };

  const handleEnd = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden rounded-xl bg-muted"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Imagem Depois */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="Depois" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
          Depois
        </div>
      </div>

      {/* Imagem Antes */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={beforeImage} alt="Antes" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
          Antes
        </div>
      </div>

      {/* Linha divisória */}
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20" style={{ left: `${sliderPosition}%` }}>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-primary/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex gap-0.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
              <path d="M6 4L2 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
              <path d="M10 4L14 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Hint */}
      {showHint && !hasInteracted && (
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-none"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="bg-white/90 px-4 py-2 rounded-full shadow-xl">
            <p className="text-foreground font-semibold text-sm flex items-center gap-2">
              <span className="text-xl">👆</span>
              Arraste para comparar
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;