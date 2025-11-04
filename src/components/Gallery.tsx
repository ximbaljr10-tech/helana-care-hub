import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - replace with actual clinic photos
  const images = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      alt: "Recepção do consultório"
    },
    {
      url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
      alt: "Sala de procedimentos"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800",
      alt: "Área de espera"
    },
    {
      url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800",
      alt: "Consultório moderno"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Conheça Nosso <span className="gradient-text">Espaço</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ambiente acolhedor, moderno e discreto para o seu conforto
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover:bg-primary/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-effect hover:bg-primary/20"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-xl overflow-hidden transition-all hover:scale-105 ${
                  index === currentIndex
                    ? "ring-4 ring-primary"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
