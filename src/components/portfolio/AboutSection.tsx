import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <User className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Get to know me better
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate Computer Science Engineering student with a love for problem-solving and building innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face"
                  alt="Professional workspace"
                  className="w-80 h-80 object-cover rounded-2xl shadow-medium"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Passionate Technology Enthusiast
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing Bachelor of Technology in Computer Science Engineering at 
                  Sreenidhi Institute of Science And Technology with a strong academic record (7.9 CGPA). 
                  I'm passionate about technology and have hands-on experience in software development.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                <Card className="shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Location:</span>
                      <span className="text-muted-foreground">Hyderabad, India</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-accent" />
                      <span className="text-foreground font-medium">Goal:</span>
                      <span className="text-muted-foreground">Software Engineering Excellence</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Interests & Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Competitive Coding",
                    "Geometry Problems",
                    "Reading Books",
                    "Tech Podcasts",
                    "Business Podcasts"
                  ].map((interest) => (
                    <Badge key={interest} variant="secondary" className="px-3 py-1">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;