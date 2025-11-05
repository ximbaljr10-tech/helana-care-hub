import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  image: string;
  type: 'ninfoplastia' | 'clareamento';
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ image, type }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        e.preventDefault();
        e.stopPropagation();
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden rounded-2xl shadow-elegant group cursor-col-resize"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Imagem completa como fundo */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`Depois - ${type}`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Label Depois */}
        <motion.div
          className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-lg z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Depois
        </motion.div>
      </div>

      {/* Overlay com clip-path para revelar "antes" */}
      <div
        className="absolute inset-0 transition-all duration-75"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
          <img
            src={image}
            alt={`Antes - ${type}`}
            className="w-full h-full object-cover brightness-75 saturate-50"
            draggable={false}
          />
        </div>
        {/* Label Antes */}
        <motion.div
          className="absolute top-4 left-4 bg-secondary text-white px-4 py-2 rounded-lg font-semibold shadow-lg z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Antes
        </motion.div>
      </div>

      {/* Linha divisória e handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30 group-hover:w-2 transition-all"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Handle central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform border-2 border-primary">
          {/* Setas */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
        initial={{ opacity: 0, y: 10 }}
      >
        ← Arraste para comparar →
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider;
