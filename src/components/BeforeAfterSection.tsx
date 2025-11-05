import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Sparkles } from "lucide-react";
import beforeAfter1 from '@/assets/before-after-1.png';
import beforeAfter2 from '@/assets/before-after-2.png';
import beforeAfter3 from '@/assets/before-after-3.png';
import beforeAfter4 from '@/assets/before-after-4.png';

const BeforeAfterSection = () => {
  const transformations = [
    {
      title: "Ninfoplastia - Caso 1",
      image: beforeAfter1,
      type: 'ninfoplastia' as const,
      description: "Harmonização dos pequenos lábios com resultado natural"
    },
    {
      title: "Clareamento Íntimo - Caso 1",
      image: beforeAfter2,
      type: 'clareamento' as const,
      description: "Uniformização da tonalidade e autoestima renovada"
    },
    {
      title: "Ninfoplastia - Caso 2",
      image: beforeAfter3,
      type: 'ninfoplastia' as const,
      description: "Procedimento delicado com foco na naturalidade"
    },
    {
      title: "Clareamento Íntimo - Caso 2",
      image: beforeAfter4,
      type: 'clareamento' as const,
      description: "Resultados progressivos após 3 sessões"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[hsl(40,40%,96%)] to-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(30,30%,45%)] to-[hsl(35,35%,55%)] text-white px-5 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">Resultados Reais</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[hsl(30,20%,25%)] mb-6">
            Antes & Depois <span className="text-[hsl(35,35%,55%)]">Incríveis</span>
          </h2>
          <p className="text-xl text-[hsl(30,15%,45%)] max-w-3xl mx-auto mb-4">
            Veja a transformação real de nossas pacientes
          </p>
          <p className="text-base text-[hsl(35,35%,55%)] font-semibold">
            ← Arraste o slider para ver o antes e depois →
          </p>
        </motion.div>

        {/* Carousel de Before/After Sliders */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {transformations.map((transformation, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 pl-4">
                  <div className="p-4">
                    <div className="bg-white rounded-3xl p-6 shadow-xl border border-[hsl(40,25%,88%)]">
                      {/* Título do Procedimento */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[hsl(30,20%,25%)] mb-2">
                          {transformation.title}
                        </h3>
                        <p className="text-[hsl(30,15%,45%)]">
                          {transformation.description}
                        </p>
                      </div>

                      {/* Before/After Slider */}
                      <BeforeAfterSlider
                        image={transformation.image}
                        type={transformation.type}
                      />

                      {/* Badge de Resultado */}
                      <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 bg-[hsl(40,40%,96%)] px-4 py-2 rounded-full">
                          <Sparkles className="w-5 h-5 text-[hsl(35,35%,55%)]" />
                          <span className="text-sm font-semibold text-[hsl(30,20%,25%)]">
                            Resultado Natural e Duradouro
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white hover:bg-[hsl(40,40%,96%)] border-[hsl(40,25%,88%)]" />
            <CarouselNext className="right-2 bg-white hover:bg-[hsl(40,40%,96%)] border-[hsl(40,25%,88%)]" />
          </Carousel>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-sm text-[hsl(30,15%,45%)] italic">
            * Imagens ilustrativas. Resultados podem variar de acordo com cada caso. Consulte a Dra. Helana para uma avaliação personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
