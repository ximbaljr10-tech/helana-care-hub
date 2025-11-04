import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const instagramLink = "https://instagram.com/dra.helianacardoso";
  const googleMapsLink = "https://maps.app.goo.gl/ivqyGNHWVvkS3q7L7";

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Dra. Heliana Cardoso</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Ginecologista e Obstetra especializada em procedimentos estéticos íntimos. 
                CRM/PE 6079
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Avaliações Google
                  </a>
                </li>
                <li>
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80">Recife - PE</span>
                </li>
                <li className="flex items-start gap-2">
                  <Instagram className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a 
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    @dra.helianacardoso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>© {currentYear} Dra. Heliana Cardoso. Todos os direitos reservados.</p>
              <p>CRM/PE 6079 | Ginecologia e Obstetrícia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
