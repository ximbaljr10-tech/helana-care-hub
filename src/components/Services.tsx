import { Sparkles, Heart, Activity, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [activeServices, setActiveServices] = useState({});

  const serviceCategories = [
    {
      icon: Sparkles,
      category: "Estética Íntima",
      services: [
        { 
          name: "Clareamento Íntimo", 
          description: "Clareamento seguro para axilas, virilha e região íntima com técnicas modernas."
        },
        { 
          name: "Ninfoplastia", 
          description: "Cirurgia para ajuste dos pequenos lábios - mais conforto e harmonia."
        },
        { 
          name: "Preenchimento Íntimo", 
          description: "Ácido hialurônico para rejuvenescimento e preenchimento natural."
        },
        { 
          name: "Skincare Íntimo", 
          description: "Cuidados especiais para a saúde e beleza da pele íntima."
        }
      ]
    },
    {
      icon: Activity,
      category: "Laserterapia",
      services: [
        { 
          name: "Laserterapia Íntima", 
          description: "Rejuvenescimento vaginal com laser para melhora da elasticidade."
        },
        { 
          name: "Bioestimulador de Colágeno", 
          description: "Estimula produção natural de colágeno para firmeza e rejuvenescimento."
        },
        { 
          name: "Peeling Íntimo", 
          description: "Revitalização da região íntima com tecnologia avançada."
        }
      ]
    },
    {
      icon: Heart,
      category: "Saúde Pélvica",
      services: [
        { 
          name: "Incontinência Urinária", 
          description: "Tratamento para escapes urinários com técnicas modernas."
        },
        { 
          name: "Vaginismo", 
          description: "Solução especializada para dor na relação sexual."
        },
        { 
          name: "Flacidez Íntima", 
          description: "Recuperação da firmeza e aparência jovem da região íntima."
        }
      ]
    }
  ];

  const whatsappLink = "https://wa.me/5561991049924";

  const toggleService = (categoryIndex, serviceIndex) => {
    setActiveServices(prev => ({
      ...prev,
      [`${categoryIndex}-${serviceIndex}`]: !prev[`${categoryIndex}-${serviceIndex}`]
    }));
  };

  return (
    <section id="servicos" className="section-padding-lg bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header - MAIOR NO DESKTOP */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f7f7eb] mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#0F4443]" />
            <span className="text-xs md:text-sm font-medium text-[#0F4443]">
              SERVIÇOS ESPECIALIZADOS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-3 md:mb-4">
            Escolha Seu
            <br />
            <span className="text-[#D6B07A]">Procedimento</span>
          </h2>
          
          <p className="text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto">
            Tratamentos modernos para sua autoestima e bem-estar íntimo
          </p>
        </motion.div>

        {/* Conteúdo Principal - MAIS EXPANDIDO NO DESKTOP */}
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-8">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-[#f7f7eb] rounded-xl md:rounded-2xl p-4 md:p-8"
              >
                {/* Cabeçalho da Categoria - MAIOR NO DESKTOP */}
                <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <category.icon className="w-4 h-4 md:w-6 md:h-6 text-[#0F4443]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif font-bold text-secondary">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {category.services.length} procedimentos disponíveis
                    </p>
                  </div>
                </div>

                {/* Lista de Serviços - MAIS ESPAÇOSA NO DESKTOP */}
                <div className="space-y-2 md:space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-lg md:rounded-xl border border-gray-100 hover:border-[#D6B07A]/30 transition-colors"
                    >
                      {/* Botão - MAIOR NO DESKTOP */}
                      <button
                        onClick={() => toggleService(categoryIndex, serviceIndex)}
                        className="w-full flex items-center justify-between p-3 md:p-6 text-left"
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-[#D6B07A] flex items-center justify-center text-white font-bold text-xs md:text-sm">
                            {serviceIndex + 1}
                          </div>
                          <h4 className="font-semibold text-secondary text-sm md:text-lg lg:text-xl">
                            {service.name}
                          </h4>
                        </div>
                        
                        {/* Chevron - MAIOR NO DESKTOP */}
                        <motion.div
                          animate={{ rotate: activeServices[`${categoryIndex}-${serviceIndex}`] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#0F4443]"
                        >
                          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </button>

                      {/* Descrição - MAIS LEGÍVEL NO DESKTOP */}
                      <AnimatePresence>
                        {activeServices[`${categoryIndex}-${serviceIndex}`] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3 md:px-6 md:pb-6 border-t border-gray-100 pt-3 md:pt-6">
                              <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                                {service.description}
                              </p>
                              <button
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="mt-2 md:mt-3 text-xs md:text-sm text-[#D6B07A] font-semibold hover:text-[#0F4443] transition-colors flex items-center gap-1"
                              >
                                Saber mais
                                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 rotate-[-90deg]" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - MAIS DESTACADO NO DESKTOP */}
          <motion.div 
            className="text-center mt-8 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-[#f7f7eb] to-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-gray-100">
              <h3 className="text-lg md:text-2xl font-serif font-bold text-secondary mb-2 md:mb-4">
                Pronta para começar?
              </h3>
              <p className="text-gray-600 text-sm md:text-lg mb-4 md:mb-6">
                Agende uma avaliação personalizada e sem compromisso
              </p>
              
              <Button 
                className="bg-[#0F4443] text-white hover:bg-[#0F4443]/90 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
};

export default Services;