import { Shield, Award, Heart, Sparkles, ArrowUpRight } from "lucide-react"; 
import { motion } from "framer-motion"; 
import { useState } from "react";

const Differentials = () => {
  const differentials = [
    { 
      icon: Shield, 
      title: "Segurança e Credibilidade", 
      description: "CRM/PE 6079 ativo. Procedimentos baseados em evidências científicas com técnicas comprovadas e seguras.",
      stats: "8+ anos",
      accent: "#0F4443",
      gradient: "from-[#0F4443]/10 via-[#0F4443]/5 to-transparent"
    },
    { 
      icon: Heart, 
      title: "Atendimento Humanizado", 
      description: "Ambiente acolhedor, discreto e livre de julgamentos. Você será ouvida e respeitada em todas as etapas.",
      stats: "+2000 pacientes",
      accent: "#D6B07A",
      gradient: "from-[#D6B07A]/10 via-[#D6B07A]/5 to-transparent"
    },
    { 
      icon: Award, 
      title: "Especialização Única", 
      description: "Expertise em estética íntima feminina. Foco exclusivo em procedimentos ginecológicos estéticos modernos.",
      stats: "5.0 ★",
      accent: "#D6B07A",
      gradient: "from-[#D6B07A]/10 via-[#D6B07A]/5 to-transparent"
    },
    { 
      icon: Sparkles, 
      title: "Resultados Naturais", 
      description: "Técnicas modernas que respeitam sua anatomia. Resultados duradouros, harmoniosos e de aparência natural.",
      stats: "98% satisfação",
      accent: "#0F4443",
      gradient: "from-[#0F4443]/10 via-[#0F4443]/5 to-transparent"
    }
  ];

  return (
    <section className="section-padding-lg bg-gradient-to-br from-[#f7f7eb] via-white to-[#f7f7eb] relative overflow-hidden">
      {/* Background APRIMORADO */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0F4443]/[0.02] via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#D6B07A]/[0.04] via-transparent to-transparent"></div>
      
      {/* Grid Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(#0F4443 1px, transparent 1px), linear-gradient(90deg, #0F4443 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header COMPACTO */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          {/* Tag Superior */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/60 backdrop-blur-xl rounded-full border border-[#0F4443]/10 shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#D6B07A]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#0F4443] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Excelência em Estética Íntima
            </span>
          </motion.div>

          {/* Título OTIMIZADO */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-5 leading-[1.1] px-4">
            Por Que Escolher a
            <span className="block mt-2 bg-gradient-to-r from-[#0F4443] via-[#0F4443]/80 to-[#D6B07A] bg-clip-text text-transparent">
              Dra. Heliana
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed px-4">
            Uma abordagem única que combina expertise técnica com cuidado genuíno, 
            garantindo sua segurança e confiança em cada procedimento.
          </p>
        </motion.div>

        {/* DESKTOP: Grid 2x2 COMPACTO */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-5 xl:gap-6 max-w-6xl mx-auto mb-12 lg:mb-16">
          {differentials.map((item, index) => (
            <DesktopCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* MOBILE/TABLET: Stack Vertical */}
        <div className="lg:hidden space-y-5 md:space-y-6 max-w-2xl mx-auto mb-12">
          {differentials.map((item, index) => (
            <MobileCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Citação Final COMPACTA */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-[#0F4443] via-[#0F4443]/98 to-[#0F4443]/95 rounded-3xl lg:rounded-[2.5rem] p-6 md:p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
            
            {/* Decoração de Fundo */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D6B07A]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#D6B07A]/15 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                {/* Ícone */}
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#D6B07A] to-[#D6B07A]/80 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Heart className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed font-light mb-6">
                    "Meu compromisso vai além da técnica. É sobre entender suas necessidades, 
                    respeitar sua individualidade e proporcionar resultados que elevem sua autoestima 
                    com total <span className="font-semibold text-[#D6B07A]">segurança e naturalidade</span>."
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-lg lg:text-xl mb-1">Dra. Helana Cardoso</p>
                      <p className="text-white/70 text-sm lg:text-base">Especialista em Estética Íntima Feminina</p>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                      <Sparkles className="w-4 h-4 text-[#D6B07A]" />
                      <span className="text-sm font-semibold">CRM/PE 6079</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Textura Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ===== DESKTOP CARD COMPACTO =====
const DesktopCard = ({ item, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;
  
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-7 xl:p-8 h-full min-h-[280px] lg:min-h-[300px] xl:min-h-[320px] border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
        
        {/* Gradiente de Fundo Animado */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Número Grande Watermark REDUZIDO */}
        <motion.div 
          className="absolute top-4 right-4 text-[90px] lg:text-[100px] xl:text-[110px] font-black leading-none select-none"
          style={{ 
            background: `linear-gradient(135deg, ${item.accent}06 0%, ${item.accent}12 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 3 : 0
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Ícone REDUZIDO */}
          <motion.div 
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
            style={{ backgroundColor: item.accent }}
            whileHover={{ scale: 1.1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
          </motion.div>

          {/* Conteúdo COMPACTO */}
          <h3 className="text-xl lg:text-2xl font-serif font-bold text-secondary mb-3 leading-tight">
            {item.title}
          </h3>
          
          <p className="text-sm lg:text-base text-brand-muted leading-relaxed mb-5 flex-grow">
            {item.description}
          </p>

          {/* Stats com Seta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.accent }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span 
                className="font-bold text-base lg:text-lg"
                style={{ color: item.accent }}
              >
                {item.stats}
              </span>
            </div>

            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight 
                className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" 
                style={{ color: item.accent }} 
              />
            </motion.div>
          </div>
        </div>

        {/* Borda Interna */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

// ===== MOBILE CARD =====
const MobileCard = ({ item, index }: any) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
    >
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-7 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        
        {/* Gradiente de Fundo */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

        <div className="relative z-10">
          {/* Header: Número + Ícone */}
          <div className="flex items-start justify-between mb-5">
            <motion.div 
              className="text-6xl md:text-7xl font-black leading-none select-none"
              style={{ 
                background: `linear-gradient(135deg, ${item.accent}08 0%, ${item.accent}15 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              whileHover={{ scale: 1.05 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>

            <motion.div 
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: item.accent }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.div>
          </div>

          {/* Conteúdo */}
          <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3 leading-tight">
            {item.title}
          </h3>
          
          <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-2.5">
            <motion.div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.accent }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span 
              className="font-bold text-base md:text-lg"
              style={{ color: item.accent }}
            >
              {item.stats}
            </span>
          </div>
        </div>

        {/* Borda Interna */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default Differentials;
