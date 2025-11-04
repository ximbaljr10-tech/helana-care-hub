import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import GoogleReviews from "@/components/GoogleReviews";
import Location from "@/components/Location";
import InstagramSection from "@/components/InstagramSection";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <GoogleReviews />
      <Services />
      <Location />
      <Differentials />
      <InstagramSection />
      <Gallery />
      <FAQ />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
