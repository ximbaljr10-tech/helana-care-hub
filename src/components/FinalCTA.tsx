
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Quero%20agendar%20minha%20consulta%20ainda%20esta%20semana!";

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[hsl(30,30%,45%)] via-[hsl(35,35%,55%)] to-[hsl(30,30%,45%)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge de Urgência */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-full mb-8 shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-6 h-6" />
            <span className="font-bold text-lg">🔥 Apenas 3 vagas disponíveis esta semana!</span>
          </motion.div>

          {/* Título */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronta Para Sua <br />
            <span className="text-[hsl(40,45%,95%)]">Transformação?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Não deixe para depois. Sua autoestima e bem-estar merecem atenção <span className="font-bold">AGORA</span>.
          </p>

          {/* Benefícios Rápidos */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Sparkles, text: "Consulta Humanizada" },
              { icon: Clock, text: "Agenda Flexível" },
              { icon: Users, text: "+2000 Mulheres Atendidas" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <item.icon className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* MEGA CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[hsl(30,30%,45%)] font-bold text-xl md:text-2xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <span className="flex items-center gap-3">
                📱 Quero Agendar Minha Consulta Agora
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Scarcity Message */}
          <motion.p
            className="mt-8 text-white/80 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            ⚡ Vagas limitadas por semana para garantir atendimento personalizado
          </motion.p>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Atendimento 100% discreto e sigiloso</p>
            <div className="flex items-center justify-center gap-2 text-white">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">Ambiente seguro e acolhedor</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
