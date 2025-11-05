import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';

interface BeforeAfterSliderProps {
  image: string;
  type: 'ninfoplastia' | 'clareamento';
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ image, type }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative w-full select-none overflow-hidden rounded-2xl shadow-elegant group">
      <div className="relative" style={{ aspectRatio: '3/4' }}>
        {/* Imagem principal */}
        <img
          src={image}
          alt={`Resultado de ${type}`}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Blur overlay - apenas no mobile */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 backdrop-blur-3xl bg-background/30 md:hidden flex items-center justify-center"
              style={{
                backdropFilter: 'blur(40px)',
              }}
            >
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground font-medium text-lg">
                  Toque para revelar os resultados
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão de revelar - apenas mobile */}
        <div className="md:hidden">
          <AnimatePresence>
            {!isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
              >
                <Button
                  onClick={() => setIsRevealed(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-2xl"
                  size="lg"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Ver Resultados
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 z-20"
              >
                <Button
                  onClick={() => setIsRevealed(false)}
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-lg"
                >
                  <EyeOff className="w-5 h-5" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dica de visualização - desktop */}
        <motion.div
          className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl text-sm font-medium text-secondary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
        >
          Resultados reais de pacientes
        </motion.div>
      </div>

      {/* Disclaimer */}
      <div className="absolute bottom-2 left-2 right-2 text-center">
        <p className="text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          Resultados individuais podem variar
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
