import { Badge } from "@/components/ui/badge";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-smooth shadow-soft hover:shadow-medium"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Shiva Sai Muthyam
              </h3>
              <p className="text-muted-foreground">
                Software Developer & Technology Enthusiast
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Technologies Used */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Built with</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border pt-6 w-full text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                © {currentYear} Shiva Sai Muthyam. Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                and lots of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;