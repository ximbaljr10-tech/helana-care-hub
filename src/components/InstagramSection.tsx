import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const InstagramSection = () => {
  const instagramHandle = "@dra.helianacardoso";
  const instagramUrl = "https://instagram.com/dra.helianacardoso";

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-full border-2 border-accent/30"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="w-7 h-7 text-accent" />
            <span className="text-xl font-bold text-foreground">{instagramHandle}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Siga no <span className="gradient-text">Instagram</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Conteúdo educativo sobre saúde íntima, bem-estar feminino e dicas exclusivas
          </p>

          {/* Animated Follower Count */}
          <motion.div 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 px-8 py-4 rounded-2xl border-2 border-accent/20 inline-flex"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary">
              <CountUp
                end={6555}
                duration={2.5}
                separator="."
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </p>
            <p className="text-xl text-muted-foreground font-semibold">Seguidores</p>
          </motion.div>
        </motion.div>

        {/* Grid de Destaques do Instagram - 3xN em todas as telas */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* Card de Destaque - Conteúdo Educativo */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-primary mb-1 sm:mb-2 md:mb-3" />
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Conteúdo Educativo</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Sobre saúde íntima</p>
            </motion.div>

            {/* Card de Destaque - Procedimentos */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-accent/20 hover:border-accent/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">✨</span>
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Procedimentos</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Antes e depois</p>
            </motion.div>

            {/* Card de Destaque - Dicas */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">💡</span>
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Dicas Exclusivas</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Bem-estar feminino</p>
            </motion.div>

            {/* Card de Destaque - Depoimentos */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/15 to-primary/15 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-accent/20 hover:border-accent/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">💬</span>
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Depoimentos</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Experiências reais</p>
            </motion.div>

            {/* Card de Destaque - Novidades */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">🆕</span>
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Novidades</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Lançamentos</p>
            </motion.div>

            {/* Card de Destaque - Lives */}
            <motion.div
              className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center border-2 border-accent/20 hover:border-accent/40 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3">📹</span>
              <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 md:mb-2">Lives & Vídeos</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Tire suas dúvidas</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            onClick={() => window.open(instagramUrl, "_blank")}
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-2xl font-bold rounded-2xl border-4 border-white/30 group"
          >
            <Instagram className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Seguir @dra.helianacardoso</span>
            <span className="sm:hidden">Seguir no Instagram</span>
            <ExternalLink className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            Acompanhe dicas exclusivas, educação em saúde íntima e novidades sobre procedimentos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
