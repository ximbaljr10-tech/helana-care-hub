import { motion } from "framer-motion";
import { Star, ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Marywilliam",
      text: "Excelente atendimento… a clínica super aconchegante, Heliana super profissional minha melhor escolha",
      avatar: "MW",
      color: "#D6B07A"
    },
    {
      name: "Palóvia Christielle",
      text: "Amei o novo ambiente e a forma que fui recebida",
      avatar: "PC",
      color: "#c9a569"
    },
    {
      name: "Ana Paula",
      text: "Todo profissionalismo e dedicação me encantou em todo meu processo, a minha experiência está sendo maravilhosa",
      avatar: "AP",
      color: "#b89960"
    },
    {
      name: "Juliana Santos",
      text: "Procedimento indolor, resultados incríveis! Me sinto muito mais confiante e feliz",
      avatar: "JS",
      color: "#a88d57"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-[#f7f7eb] to-white relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6B07A]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Compacto */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-md border border-[#D6B07A]/20 mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D6B07A] text-[#D6B07A]" />
            <span className="text-xs font-bold text-[#2c2416]">Avaliações Verificadas</span>
            <span className="text-xs text-[#5a4a3a]">•</span>
            <span className="text-xs font-bold text-[#D6B07A]">98% Satisfação</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark mb-2">
            Milhares de Mulheres <span className="text-[#D6B07A]">Confiam</span> em Nós
          </h2>
          <p className="text-sm md:text-base text-brand-muted">
            Resultados comprovados por quem já viveu a transformação
          </p>
        </motion.div>

        {/* Card Único - Reviews do Google */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Google Badge */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-[#D6B07A]/20 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-bold text-[#2c2416]">Google Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-[#2c2416]">5.0</span>
                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              </div>
            </div>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>

            <a
              href="https://www.google.com.br/maps/place/Dra.+Heliana+Cardoso+%7C+Est%C3%A9tica+%C3%8Dntima+Feminina/@-15.8430303,-48.0320841,17z/data=!4m8!3m7!1s0x935a3338e4efd599:0xb2b082aab0ebb28a!8m2!3d-15.8405077!4d-48.027528!9m1!1b1!16s%2Fg%2F11x__t1gcz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-[#D6B07A] hover:text-[#c9a569] transition-colors font-semibold"
            >
              Ver todas as avaliações
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Reviews Animados */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#D6B07A]/20 relative overflow-hidden">
            {/* Decoração */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D6B07A]/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative">
              {/* Review Ativo */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-brand-dark mb-4 leading-relaxed">
                  "{reviews[activeIndex].text}"
                </p>

                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{ backgroundColor: reviews[activeIndex].color }}
                  >
                    <span className="text-white font-bold text-xs">
                      {reviews[activeIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">
                      {reviews[activeIndex].name}
                    </p>
                    <p className="text-xs text-[#D6B07A] font-semibold">✓ Verificado</p>
                  </div>
                </div>
              </motion.div>

              {/* Mini Avatares - Todos os Reviews */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#D6B07A]/10">
                {reviews.map((review, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      activeIndex === index 
                        ? 'ring-2 ring-[#D6B07A] ring-offset-2 scale-110' 
                        : 'opacity-50 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: review.color }}
                  >
                    <span className="text-white">{review.avatar}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;