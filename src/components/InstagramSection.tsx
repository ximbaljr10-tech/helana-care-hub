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
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
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

        {/* Feed do Instagram - Grid 3x3 FIXO */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Grid 3 colunas x 3 linhas = 9 posts - SEMPRE 3 COLUNAS */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-2xl mx-auto">
            {/* Post 1 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Conteúdo Educativo</p>
              </div>
            </motion.div>

            {/* Post 2 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">✨</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Procedimentos</p>
              </div>
            </motion.div>

            {/* Post 3 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/15 to-accent/15 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">💡</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Dicas Exclusivas</p>
              </div>
            </motion.div>

            {/* Post 4 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/15 to-primary/15 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">💬</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Depoimentos</p>
              </div>
            </motion.div>

            {/* Post 5 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">🆕</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Novidades</p>
              </div>
            </motion.div>

            {/* Post 6 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">📹</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Lives & Vídeos</p>
              </div>
            </motion.div>

            {/* Post 7 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/25 to-accent/15 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">🌸</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Saúde Íntima</p>
              </div>
            </motion.div>

            {/* Post 8 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/25 to-primary/15 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">👩‍⚕️</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Dra. Heliana</p>
              </div>
            </motion.div>

            {/* Post 9 */}
            <motion.div
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl sm:text-4xl md:text-5xl">💖</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold truncate">Bem-estar</p>
              </div>
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
            className="w-full sm:w-auto bg-gradient-to-r from-accent via-primary to-accent hover:from-primary hover:via-accent hover:to-primary text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-2xl font-bold rounded-2xl border-4 border-accent/30 group"
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
