
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Flame } from "lucide-react";

const TopProcedures = () => {
  const whatsappLink = "https://wa.me/5561991049924?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20";

  const procedures = [
    {
      title: "Ninfoplastia",
      subtitle: "Harmonização dos Pequenos Lábios",
      description: "Procedimento mais procurado para redução e harmonização dos pequenos lábios, proporcionando conforto e autoestima.",
      benefits: [
        "Resultados naturais",
        "Procedimento rápido",
        "Recuperação tranquila",
        "Aumento da autoconfiança"
      ],
      image: "/images/procedures/line-art-1.png",
      popular: true
    },
    {
      title: "Clareamento Íntimo",
      subtitle: "Recupere a Tonalidade Natural",
      description: "Tratamento seguro e eficaz para uniformizar a tonalidade da região íntima, devolvendo autoestima e confiança.",
      benefits: [
        "Resultados visíveis",
        "Indolor",
        "Rápida aplicação",
        "Pele uniforme"
      ],
      image: "/images/procedures/line-art-2.png",
      popular: true
    },
    {
      title: "Preenchimento Íntimo",
      subtitle: "Rejuvenescimento e Volume",
      description: "Devolve volume, firmeza e elasticidade à região íntima, melhorando estética e sensibilidade.",
      benefits: [
        "Rejuvenescimento",
        "Maior sensibilidade",
        "Efeito imediato",
        "Resultados duradouros"
      ],
      image: "/images/procedures/line-art-3.png",
      popular: true
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)] text-white px-5 py-2 rounded-full mb-6 shadow-lg shine-pass">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">Procedimentos em Destaque</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[hsl(30,20%,25%)] mb-6">
            Escolha Sua <span className="text-primary-dark">Transformação</span>
          </h2>
          <p className="text-xl text-[hsl(30,15%,45%)] max-w-3xl mx-auto">
            Os procedimentos preferidos pelas nossas pacientes para recuperar autoestima e bem-estar íntimo
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              className="bg-[hsl(40,40%,96%)] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[hsl(40,25%,88%)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Imagem */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[hsl(43,32%,96%)] to-white">
                <img 
                  src={procedure.image} 
                  alt={procedure.title}
                  className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,30%,45%)]/10 to-transparent" />
                {procedure.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg shimmer-effect flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Em Destaque
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {procedure.title}
                  </h3>
                  <p className="text-white/90 font-medium">
                    {procedure.subtitle}
                  </p>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 bg-white">
                <p className="text-[hsl(30,15%,45%)] mb-6 leading-relaxed">
                  {procedure.description}
                </p>

                {/* Benefícios */}
                <div className="space-y-2 mb-6">
                  {procedure.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-[hsl(30,20%,25%)]">
                      <div className="w-5 h-5 rounded-full bg-[hsl(35,35%,55%)] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-gradient-to-r from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)] hover:from-[hsl(35,35%,55%)] hover:to-[hsl(30,30%,45%)] text-white font-bold py-6 rounded-xl group shadow-lg"
                  onClick={() => window.open(`${whatsappLink}${procedure.title}`, '_blank')}
                >
                  Quero Saber Mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProcedures;
