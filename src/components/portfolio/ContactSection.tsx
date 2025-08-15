import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muthyamshivasai2004@gmail.com",
      action: () => window.open("mailto:muthyamshivasai2004@gmail.com", "_blank"),
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8978183530",
      action: () => window.open("tel:+918978183530", "_blank"),
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      action: () => {},
      color: "text-blue-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shivasai-muthyam-141471275/",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact) => {
                    const IconComponent = contact.icon;
                    return (
                      <Card 
                        key={contact.label} 
                        className="cursor-pointer shadow-soft hover:shadow-medium transition-smooth group"
                        onClick={contact.action}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg bg-secondary ${contact.color} group-hover:scale-110 transition-transform`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {contact.label}
                              </p>
                              <p className="font-medium text-foreground">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="contact"
                        size="lg"
                        className={`${social.color} text-white`}
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        <IconComponent className="w-5 h-5 mr-2" />
                        {social.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open("mailto:muthyamshivasai2004@gmail.com", "_blank")}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an Email
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open("https://www.linkedin.com/in/shivasai-muthyam-141471275/", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-foreground">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently seeking software engineering roles and internships. 
                    Open to full-time, part-time, and project-based opportunities.
                  </p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-medium text-foreground mb-2">
                    Response Time
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to emails within 24 hours and LinkedIn messages within 48 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;