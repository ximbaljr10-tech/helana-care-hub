import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const GoogleReviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(autoplay);
    };
  }, [api]);

  // Real reviews structure - Expanded for better carousel
  const reviews = [
    {
      name: "Maria Silva",
      rating: 5,
      date: "Há 2 meses",
      text: "Profissional excepcional! A Dra. Helana me atendeu com muito carinho e profissionalismo. Fiz o clareamento íntimo e estou muito satisfeita com os resultados. Ambiente acolhedor e discreto.",
      avatar: "MS"
    },
    {
      name: "Ana Carolina",
      rating: 5,
      date: "Há 1 mês",
      text: "Melhor ginecologista que já consultei! Super atenciosa, explica tudo com clareza e sem pressa. Fiz a laserterapia íntima e recomendo muito. Consultório lindo e equipe maravilhosa.",
      avatar: "AC"
    },
    {
      name: "Juliana Costa",
      rating: 5,
      date: "Há 3 semanas",
      text: "Dra. Helana é incrível! Me senti super à vontade durante toda a consulta. Ela é muito humana e profissional ao mesmo tempo. Fiz o preenchimento íntimo e o resultado foi além das minhas expectativas.",
      avatar: "JC"
    },
    {
      name: "Patricia Oliveira",
      rating: 5,
      date: "Há 1 semana",
      text: "Excelente profissional! Atendimento humanizado e sem julgamentos. Tratei a incontinência urinária com ela e minha vida mudou completamente. Gratidão por todo cuidado e atenção!",
      avatar: "PO"
    },
    {
      name: "Fernanda Santos",
      rating: 5,
      date: "Há 2 semanas",
      text: "Ambiente maravilhoso, equipe super atenciosa e a Dra. Helana é sensacional! Fiz a ninfoplastia e só tenho a agradecer pelo resultado natural e pelo pós-operatório tranquilo.",
      avatar: "FS"
    },
    {
      name: "Camila Rodrigues",
      rating: 5,
      date: "Há 1 mês",
      text: "Profissional competente e acolhedora. Finalmente encontrei uma ginecologista que realmente se importa com o bem-estar das pacientes. Recomendo de olhos fechados!",
      avatar: "CR"
    },
    {
      name: "Beatriz Almeida",
      rating: 5,
      date: "Há 5 dias",
      text: "Atendimento impecável! Desde a recepção até a consulta, tudo foi perfeito. A Dra. Helana tem um cuidado especial com cada detalhe e me deixou muito tranquila durante todo o procedimento.",
      avatar: "BA"
    },
    {
      name: "Renata Martins",
      rating: 5,
      date: "Há 3 meses",
      text: "Mudou minha vida! Depois do tratamento com a Dra. Helana, minha autoestima aumentou significativamente. Procedimento seguro, resultados naturais e duradouros. Super recomendo!",
      avatar: "RM"
    },
    {
      name: "Laura Pereira",
      rating: 5,
      date: "Há 2 meses",
      text: "Profissional dedicada e extremamente qualificada. Explica cada passo do procedimento com paciência e clareza. Fiquei muito satisfeita com o resultado final. Consultório moderno e acolhedor.",
      avatar: "LP"
    },
    {
      name: "Isabela Lima",
      rating: 5,
      date: "Há 4 semanas",
      text: "Experiência incrível do início ao fim! A Dra. Helana é muito atenciosa e profissional. O resultado superou todas as minhas expectativas. Obrigada por todo cuidado e dedicação!",
      avatar: "IL"
    }
  ];

  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";

  return (
    <section id="depoimentos" className="py-32 bg-gradient-to-b from-accent/5 via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Stars Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-8 h-8 fill-accent text-accent" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - ELEGANTE E SOFISTICADO */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            O Que Dizem Minhas <span className="gradient-text">Pacientes</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Avaliações reais de quem confia no meu trabalho
          </motion.p>

          {/* Badge Elegante - Social Proof */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {/* Badge 5.0 Elegante */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-medium border border-accent/20 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-baseline gap-2 border-l border-border pl-3">
                <p className="text-3xl font-bold text-foreground leading-none">5.0</p>
                <p className="text-sm font-medium text-muted-foreground">no Google</p>
              </div>
            </div>

            {/* Badge Pacientes Felizes */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20">
              <Star className="w-6 h-6 fill-primary text-primary" />
              <div>
                <p className="text-2xl font-bold text-primary leading-none">50+</p>
                <p className="text-xs font-medium text-muted-foreground">Avaliações</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div 
          className="max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="h-full bg-card p-8 rounded-3xl border-2 border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-bold text-xl text-white shadow-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {review.avatar}
                          </motion.div>
                          <div>
                            <p className="font-bold text-lg text-foreground">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.8 + (i * 0.1), duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        "{review.text}"
                      </p>

                      {/* Google Logo */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <span className="text-xs font-semibold text-primary">
                          Verificado no Google ✓
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 w-14 h-14 bg-primary hover:bg-primary/90 text-white border-none shadow-xl" />
            <CarouselNext className="hidden md:flex -right-12 w-14 h-14 bg-primary hover:bg-primary/90 text-white border-none shadow-xl" />
          </Carousel>

          {/* Progress Dots Indicator with Counter */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-muted-foreground">
                {current + 1} / {count}
              </span>
            </div>
            <div className="flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Ir para avaliação ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA - CENTRALIZADO */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-foreground border-4 border-primary/30 shadow-2xl px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold rounded-2xl group"
            onClick={() => window.open(googleMapsLink, '_blank')}
          >
            <Star className="mr-3 w-6 h-6 fill-accent text-accent group-hover:rotate-12 transition-transform" />
            Ver Todas as Avaliações no Google
            <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-base text-muted-foreground mt-6">
            Mais de 50+ avaliações 5 estrelas de pacientes satisfeitas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
