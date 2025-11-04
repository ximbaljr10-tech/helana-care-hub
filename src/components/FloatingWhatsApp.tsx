import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/message/NPI4MNZIT1TP";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Bounce in after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="relative">
        {/* Online Badge - SEM animação constante */}
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          Online
        </div>

        {/* WhatsApp Button - Hover pausa animação */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <Button
            size="lg"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 hover:from-green-500 hover:via-emerald-600 hover:to-green-700 text-white p-0 border-4 border-white/30"
            onClick={() => window.open(whatsappLink, '_blank')}
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          </Button>
        </motion.div>

        {/* Pulse Ring Effect - SUAVE, LENTO e ELEGANTE (3s) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/20 -z-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Segundo Ring para efeito mais suave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-400/15 -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>
    </motion.div>
  );
};

export default FloatingWhatsApp;
