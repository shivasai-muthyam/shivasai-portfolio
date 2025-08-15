import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Sreenidhi Institute of Science And Technology",
      location: "Hyderabad, India",
      duration: "2022 - 2025",
      grade: "7.9 CGPA (till 5th semester)",
      status: "Current",
      description: "Specializing in software development, data structures, algorithms, and modern programming paradigms.",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      degree: "Intermediate Education",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Pinegrove Junior College",
      location: "Hyderabad, India",
      duration: "2020 - 2022",
      grade: "97.3%",
      status: "Completed",
      description: "Focused on mathematical foundations and scientific principles, preparing for engineering studies.",
      icon: Award,
      color: "text-accent"
    },
    {
      degree: "Secondary Education",
      field: "High School",
      institution: "Greenwood High School",
      location: "Warangal, India",
      duration: "2020",
      grade: "85%",
      status: "Completed",
      description: "Strong foundation in core subjects with emphasis on mathematics and science.",
      icon: Award,
      color: "text-blue-500"
    }
  ];

  const certifications = [
    {
      title: "Learning DSA using JAVA",
      issuer: "Apna College",
      date: "2023",
      type: "Completion Certificate",
      description: "Comprehensive course covering data structures and algorithms implementation in Java.",
      link: "https://drive.google.com/file/d/1piueVRGZgqkYLtl8wmQtUnpuuutiTuV2/view"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education & Learning
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              My academic journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A strong educational foundation built through consistent academic excellence and continuous learning.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <Card key={edu.degree + edu.institution} className="shadow-soft hover:shadow-medium transition-smooth">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and Status */}
                      <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 flex-shrink-0">
                        <div className={`p-3 rounded-xl bg-secondary ${edu.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge 
                          variant={edu.status === "Current" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium mb-2">
                            {edu.field}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.institution}, {edu.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.duration}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="px-3 py-1">
                            Grade: {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.title} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-primary font-medium text-sm">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {cert.type}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    {cert.link && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(cert.link, "_blank")}
                        className="w-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View DSA Certificate
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;