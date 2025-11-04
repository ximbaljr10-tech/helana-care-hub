import { Shield, Heart, Award, Clock, UserCheck, Sparkles } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Segurança e Credibilidade",
      description: "CRM/PE 6079 ativo e procedimentos baseados em evidências científicas"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Ambiente acolhedor, seguro e livre de julgamentos"
    },
    {
      icon: Award,
      title: "Especialização",
      description: "Expertise em estética íntima e procedimentos ginecológicos"
    },
    {
      icon: Clock,
      title: "Resultados Comprovados",
      description: "Técnicas modernas com resultados naturais e duradouros"
    },
    {
      icon: UserCheck,
      title: "Personalização",
      description: "Cada procedimento é adaptado às suas necessidades individuais"
    },
    {
      icon: Sparkles,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e técnicas atualizadas"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por Que Escolher a <span className="gradient-text">Dra. Helana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu cuidado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border shadow-soft hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
