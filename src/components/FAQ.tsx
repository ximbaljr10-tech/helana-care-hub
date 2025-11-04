import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Os procedimentos de estética íntima são dolorosos?",
      answer: "A maioria dos procedimentos é realizada com anestesia local ou sedação, garantindo seu conforto durante todo o processo. O nível de desconforto varia de acordo com o procedimento, mas sempre priorizamos seu bem-estar e utilizamos técnicas modernas para minimizar qualquer incômodo."
    },
    {
      question: "Quanto tempo dura a recuperação dos procedimentos?",
      answer: "O tempo de recuperação varia conforme o procedimento. Tratamentos não invasivos como laserterapia permitem retorno imediato às atividades. Procedimentos cirúrgicos como ninfoplastia podem requerer de 2 a 4 semanas de recuperação completa. Durante a consulta, explicarei detalhadamente o processo de recuperação específico para seu caso."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "Na primeira consulta, conversaremos sobre suas preocupações, expectativas e histórico médico em um ambiente acolhedor e sem julgamentos. Realizarei exame físico quando necessário e explicarei todas as opções de tratamento disponíveis, incluindo benefícios, riscos e resultados esperados. Você terá espaço para tirar todas as suas dúvidas."
    },
    {
      question: "Os procedimentos são seguros?",
      answer: "Sim! Todos os procedimentos são realizados seguindo protocolos médicos rigorosos e técnicas baseadas em evidências científicas. Utilizo equipamentos de última geração e materiais de alta qualidade. Minha prioridade é sempre sua segurança e bem-estar."
    },
    {
      question: "Preciso de encaminhamento médico?",
      answer: "Não é necessário encaminhamento médico. Você pode agendar sua consulta diretamente. Atendo tanto casos de rotina quanto situações que necessitam de acompanhamento especializado."
    },
    {
      question: "Qual a idade mínima para procedimentos de estética íntima?",
      answer: "A idade mínima varia conforme o procedimento. Para procedimentos estéticos, geralmente recomendo aguardar a completa maturidade física (após 18 anos). Cada caso é avaliado individualmente, considerando aspectos físicos, emocionais e médicos."
    },
    {
      question: "Os resultados são naturais?",
      answer: "Absolutamente! Meu objetivo é sempre proporcionar resultados harmoniosos e naturais, respeitando sua individualidade e anatomia. Trabalho para que você se sinta mais confiante e confortável, sem que os resultados sejam artificiais ou exagerados."
    },
    {
      question: "O atendimento é discreto?",
      answer: "Sim, total discrição é garantida. Meu consultório oferece privacidade completa, e todas as informações são tratadas com absoluto sigilo médico, conforme o Código de Ética Médica e a LGPD."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[hsl(40,40%,96%)] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-6 shadow-lg border border-[hsl(40,25%,88%)]">
            <HelpCircle className="w-5 h-5 text-[hsl(35,35%,55%)]" />
            <span className="font-bold text-[hsl(30,20%,25%)]">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[hsl(30,20%,25%)] mb-6">
            Perguntas <span className="text-[hsl(35,35%,55%)]">Frequentes</span>
          </h2>
          <p className="text-xl text-[hsl(30,15%,45%)] max-w-2xl mx-auto">
            Tire suas dúvidas sobre procedimentos, consultas e atendimento
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white border border-[hsl(40,25%,88%)] rounded-2xl px-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:text-[hsl(35,35%,55%)] transition-colors py-6">
                    <span className="text-base md:text-lg font-semibold pr-4 text-[hsl(30,20%,25%)]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-[hsl(30,15%,45%)] leading-relaxed pl-4 border-l-2 border-[hsl(35,35%,55%)]/20">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <motion.div
          className="max-w-2xl mx-auto mt-16 text-center p-8 bg-gradient-to-br from-[hsl(35,35%,55%)]/10 to-[hsl(30,30%,45%)]/10 rounded-3xl border border-[hsl(40,25%,88%)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-lg text-[hsl(30,20%,25%)] font-semibold mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <p className="text-[hsl(30,15%,45%)]">
            Entre em contato pelo WhatsApp e terei prazer em esclarecer suas dúvidas pessoalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
