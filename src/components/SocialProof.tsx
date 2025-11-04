
import { motion } from "framer-motion";
import { Star, Users, Award, Heart } from "lucide-react";
import CountUp from "react-countup";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: 2000,
      suffix: "+",
      label: "Mulheres Transformadas",
      color: "hsl(35,35%,55%)"
    },
    {
      icon: Star,
      value: 5.0,
      decimals: 1,
      suffix: "⭐",
      label: "Avaliação no Google",
      color: "hsl(35,35%,55%)"
    },
    {
      icon: Award,
      value: 8,
      suffix: "+",
      label: "Anos de Experiência",
      color: "hsl(35,35%,55%)"
    },
    {
      icon: Heart,
      value: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
      color: "hsl(35,35%,55%)"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[hsl(40,40%,96%)] to-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(30,20%,25%)] mb-4">
            Milhares de Mulheres <span className="text-[hsl(35,35%,55%)]">Confiam</span> em Nós
          </h2>
          <p className="text-lg text-[hsl(30,15%,45%)] max-w-2xl mx-auto">
            Resultados comprovados e aprovados por quem já viveu a transformação
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[hsl(40,25%,88%)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>
                <p className="text-4xl md:text-5xl font-black text-[hsl(30,20%,25%)] mb-2">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p className="text-sm md:text-base text-[hsl(30,15%,45%)] font-semibold">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depoimento em Destaque */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-[hsl(40,25%,88%)] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[hsl(35,35%,55%)] text-[hsl(35,35%,55%)]" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-[hsl(30,20%,25%)] italic mb-4">
            "Procedimento indolor, resultados incríveis! Me sinto muito mais confiante e feliz. A Dra. Helana é extremamente profissional e atenciosa."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(35,35%,55%)] to-[hsl(30,30%,45%)]" />
            <div>
              <p className="font-bold text-[hsl(30,20%,25%)]">Maria S.</p>
              <p className="text-sm text-[hsl(30,15%,45%)]">Paciente verificada</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
