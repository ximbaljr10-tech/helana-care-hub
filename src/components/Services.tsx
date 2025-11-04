import { Sparkles, Heart, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      category: "Estética Íntima",
      color: "text-accent",
      bgColor: "bg-accent/10",
      gradient: "from-accent/20 to-yellow-400/20",
      services: [
        {
          name: "Clareamento Íntimo",
          description: "Tratamento para axilas, virilha e região íntima com técnicas modernas e seguras para recuperar o tom natural da pele."
        },
        {
          name: "Ninfoplastia",
          description: "Cirurgia íntima para correção dos pequenos lábios, proporcionando conforto e harmonia estética."
        },
        {
          name: "Preenchimento Íntimo com Ácido Hialurônico",
          description: "Rejuvenescimento e preenchimento dos grandes lábios para aparência mais jovem e saudável."
        },
        {
          name: "Skincare Íntimo",
          description: "Protocolo personalizado de cuidados para a saúde e beleza da região íntima."
        }
      ]
    },
    {
      icon: Activity,
      category: "Laserterapia e Bioestimulação",
      color: "text-primary",
      bgColor: "bg-primary/10",
      gradient: "from-primary/20 to-teal-400/20",
      services: [
        {
          name: "Laserterapia Íntima",
          description: "Tratamento a laser para rejuvenescimento vaginal, melhora da elasticidade e função sexual."
        },
        {
          name: "Bioestimulador de Colágeno Íntimo",
          description: "Estimula a produção natural de colágeno para firmeza e rejuvenescimento."
        },
        {
          name: "Peeling de PPK (Policaprolactona)",
          description: "Tratamento avançado para revitalização e rejuvenescimento da região íntima."
        }
      ]
    },
    {
      icon: Heart,
      category: "Saúde do Assoalho Pélvico",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      gradient: "from-rose-500/20 to-pink-400/20",
      services: [
        {
          name: "Tratamento para Incontinência Urinária",
          description: "Procedimentos não invasivos e cirúrgicos para controle da incontinência urinária."
        },
        {
          name: "Tratamento para Vaginismo",
          description: "Abordagem especializada e humanizada para vaginismo com resultados efetivos."
        },
        {
          name: "Flacidez de Grandes Lábios",
          description: "Tratamentos para recuperar a firmeza e aparência jovem dos grandes lábios."
        }
      ]
    },
    {
      icon: ShieldCheck,
      category: "Ginecologia Geral",
      color: "text-teal-600",
      bgColor: "bg-teal-600/10",
      gradient: "from-teal-600/20 to-cyan-400/20",
      services: [
        {
          name: "Consultas Ginecológicas",
          description: "Acompanhamento completo da saúde feminina com atendimento humanizado."
        },
        {
          name: "Pré-Natal",
          description: "Acompanhamento gestacional com cuidado e atenção em todas as fases."
        },
        {
          name: "Check-up Preventivo",
          description: "Exames de rotina e prevenção para manter sua saúde em dia."
        }
      ]
    }
  ];

  const whatsappLink = "https://wa.me/message/NPI4MNZIT1TP";

  return (
    <section id="servicos" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/30"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-primary">PROCEDIMENTOS ESPECIALIZADOS</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Serviços Para Sua <span className="gradient-text">Saúde Íntima</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Procedimentos modernos, seguros e comprovados para seu bem-estar e autoestima
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-8 mb-16">
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-border shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              {/* Decorative Glow Effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category Header */}
              <motion.div 
                className="flex items-center gap-6 mb-8"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-3xl ${category.bgColor} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className={`w-10 h-10 ${category.color}`} />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {category.category}
                </h3>
              </motion.div>

              {/* Services Accordion */}
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.services.map((service, serviceIdx) => (
                  <motion.div
                    key={serviceIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 + 0.4 + (serviceIdx * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem 
                      value={`item-${idx}-${serviceIdx}`}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40 px-6 hover:bg-white/80 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 hover:no-underline">
                        <span className="text-lg md:text-xl font-bold flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-full ${category.bgColor} flex items-center justify-center text-sm font-black ${category.color}`}>
                            {serviceIdx + 1}
                          </span>
                          {service.name}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.p 
                          className="text-base md:text-lg text-muted-foreground leading-relaxed pl-11 py-4 border-l-4 border-primary/30 ml-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.description}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 border-2 border-primary/20">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Tem dúvidas sobre qual procedimento é ideal para você?
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
              Entre em contato e receba uma orientação personalizada
            </p>
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-black shadow-2xl transition-all duration-300 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl border-4 border-accent/30 group"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                💬 Conversar com a Dra. Helana
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
