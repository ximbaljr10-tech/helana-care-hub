import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import HeroNew from "@/components/HeroNew";
import SocialProof from "@/components/SocialProof";
import TopProcedures from "@/components/TopProcedures";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramSection from "@/components/InstagramSection";
import Gallery from "@/components/Gallery";

/**
 * NOVA ARQUITETURA DE CONVERSÃO - LANDING PAGE HELANA CARE HUB
 * 
 * Hierarquia Estratégica (10 Seções):
 * 1. Hero - Benefícios emocionais, urgência, CTA claro
 * 2. Social Proof - Reviews, números, confiança
 * 3. Top 3 Procedures - Foco nos mais populares
 * 4. How It Works - 3 passos simples
 * 5. Before/After - Slider interativo com transformações reais
 * 6. Differentials - 4 pilares de confiança
 * 7. Other Procedures - Accordion com outros serviços
 * 8. FAQ - Dúvidas frequentes em accordion
 * 9. Final CTA - Urgência/escassez máxima
 * 10. Footer
 * 
 * PALETA: Tons de BEIGE (claro e escuro) + BRANCO
 * OBJETIVO: Lead agende consulta OLHANDO FOTOS sem precisar ler muito
 * GATILHOS: Urgência, escassez, prova social, micro-animações
 */

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      
      {/* 1. Hero - Impacto Emocional + Urgência */}
      <HeroNew />
      
      {/* 2. Social Proof - Confiança Imediata */}
      <SocialProof />
      
      {/* 3. Top 3 Procedures - Foco no que importa */}
      <TopProcedures />
      
      {/* 4. How It Works - Simplicidade */}
      <HowItWorks />
      
      {/* 5. Before/After - VISUAL IMPACT (slider interativo) */}
      <BeforeAfterSection />
      
      {/* 6. Differentials - 4 Pilares de Confiança */}
      <Differentials />
      
      {/* 7. Other Procedures - Accordion (outros serviços) */}
      <Services />
      
      {/* 8. FAQ - Accordion */}
      <FAQ />
      
      {/* 8.5 Google Reviews - Depoimentos Reais */}
      <GoogleReviews />
      
      {/* 8.6 Gallery - Ambiente do Consultório */}
      <Gallery />
      
      {/* 8.7 Instagram - Conteúdo Social */}
      <InstagramSection />
      
      {/* 8.8 Location - Localização e Contato */}
      <Location />
      
      {/* 9. Final CTA - Urgência/Escassez MÁXIMA */}
      <FinalCTA />
      
      {/* 10. Footer */}
      <Footer />
      
      {/* WhatsApp Flutuante */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
