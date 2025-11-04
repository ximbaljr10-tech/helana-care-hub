import { Heart, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Ambiente acolhedor e livre de julgamentos, onde você se sente confortável para falar sobre suas necessidades."
    },
    {
      icon: Shield,
      title: "Segurança e Ética",
      description: "Procedimentos baseados em evidências científicas, realizados com total segurança e discrição."
    },
    {
      icon: Sparkles,
      title: "Resultados Naturais",
      description: "Foco no seu bem-estar e autoestima, respeitando sua individualidade e buscando resultados harmoniosos."
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Especialista em ginecologia e procedimentos estéticos íntimos, com milhares de pacientes satisfeitas."
    }
  ];

  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sua Saúde Íntima é Parte da <span className="gradient-text">Sua Saúde Geral</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Como ginecologista especializada em estética íntima, meu compromisso é oferecer 
            cuidados que vão além do consultório, promovendo sua autoestima, confiança e qualidade de vida.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-card p-8 md:p-10 rounded-3xl border-2 border-border hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-6 relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 shadow-md"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="max-w-4xl mx-auto p-10 md:p-14 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl border-2 border-primary/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative quote marks */}
          <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">"</div>
          <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none rotate-180">"</div>
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed italic font-medium mb-6">
              Acredito que toda mulher merece se sentir confiante e confortável com seu corpo. 
              Meu objetivo é criar um espaço seguro onde você possa cuidar da sua saúde íntima 
              sem tabus, com acolhimento e profissionalismo.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-center text-xl font-bold text-primary">
                Dra. Helana Cardoso
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            
            <p className="text-center text-base text-muted-foreground mt-2">
              CRM/PE 6079 | Ginecologia e Obstetrícia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
