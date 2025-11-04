
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Entre em Contato",
      description: "Converse pelo WhatsApp de forma discreta e acolhedora. Tire todas as suas dúvidas sem compromisso.",
      color: "hsl(35,35%,55%)"
    },
    {
      icon: Calendar,
      title: "2. Agende sua Consulta",
      description: "Escolha o melhor horário para você. Consulta personalizada e humanizada, focada nas suas necessidades.",
      color: "hsl(35,35%,55%)"
    },
    {
      icon: Sparkles,
      title: "3. Realize sua Transformação",
      description: "Procedimentos modernos, seguros e indolores. Comece sua jornada de autoestima e bem-estar hoje.",
      color: "hsl(35,35%,55%)"
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
            Como <span className="text-[hsl(35,35%,55%)]">Funciona</span>
          </h2>
          <p className="text-xl text-[hsl(30,15%,45%)] max-w-2xl mx-auto">
            3 passos simples para começar sua transformação
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Connector Line (exceto no último) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[hsl(35,35%,55%)] to-transparent" />
              )}

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-[hsl(40,25%,88%)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                {/* Icon */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
                  style={{ backgroundColor: `${step.color}` }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[hsl(30,20%,25%)] mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-[hsl(30,15%,45%)] leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Complementar */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg text-[hsl(30,15%,45%)] italic">
            💖 Tudo em um ambiente acolhedor, discreto e sem julgamentos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
