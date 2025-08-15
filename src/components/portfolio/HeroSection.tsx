import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-section-bg relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Welcome to my portfolio
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Shiva Sai Muthyam</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
              Software Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology with hands-on experience in software development. 
            Eager to apply programming skills and gain practical experience in software engineering roles.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Java", "Python", "C++", "HTML/CSS", "React", "MySQL"].map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="min-w-[200px]"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="min-w-[200px]"
            >
              <Download className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;