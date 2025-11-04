import { Shield, Award, Heart, Users, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Segurança e Credibilidade",
      description: "CRM/PE 6079 ativo. Procedimentos baseados em evidências científicas com técnicas comprovadas e seguras.",
      stats: "8+ anos",
      gradient: "from-[hsl(35,35%,55%)] to-[hsl(30,30%,45%)]"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Ambiente acolhedor, discreto e livre de julgamentos. Você será ouvida e respeitada em todas as etapas.",
      stats: "+2000 pacientes",
      gradient: "from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)]"
    },
    {
      icon: Award,
      title: "Especialização Única",
      description: "Expertise em estética íntima feminina. Foco exclusivo em procedimentos ginecológicos estéticos modernos.",
      stats: "5.0",
      gradient: "from-[hsl(35,35%,55%)] to-[hsl(30,30%,45%)]"
    },
    {
      icon: Sparkles,
      title: "Resultados Naturais",
      description: "Técnicas modernas que respeitam sua anatomia. Resultados duradouros, harmoniosos e de aparência natural.",
      stats: "98% satisfação",
      gradient: "from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[hsl(40,40%,96%)]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[hsl(30,20%,25%)] mb-6">
            Por Que <span className="text-[hsl(35,35%,55%)]">Confiar</span> na Dra. Helana
          </h2>
          <p className="text-xl text-[hsl(30,15%,45%)] max-w-2xl mx-auto">
            4 pilares que garantem sua segurança e satisfação
          </p>
        </motion.div>

        {/* Cards Grid - 4 Pilares */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[hsl(40,25%,88%)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-[100px] group-hover:opacity-20 transition-opacity`} />

              {/* Icon */}
              <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                <item.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(30,20%,25%)] mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-[hsl(30,15%,45%)] leading-relaxed mb-6 relative z-10">
                {item.description}
              </p>

              {/* Stats Badge */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg relative z-10`}>
                <Sparkles className="w-4 h-4" />
                {item.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complementary Message */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-br from-[hsl(35,35%,55%)]/10 to-[hsl(30,30%,45%)]/10 rounded-2xl p-8 border border-[hsl(40,25%,88%)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-[hsl(30,20%,25%)] font-semibold flex items-start gap-3">
            <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <span>"Meu compromisso é com sua saúde, bem-estar e autoestima. Cada procedimento é realizado com dedicação, técnica e muito carinho."</span>
          </p>
          <p className="text-[hsl(30,15%,45%)] mt-4">— Dra. Helana Cardoso</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
