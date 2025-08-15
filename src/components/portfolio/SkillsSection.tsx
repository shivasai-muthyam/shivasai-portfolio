import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Globe, Wrench, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-accent",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 50 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-blue-500",
      skills: [
        { name: "Git", level: 80 },
        { name: "Visual Studio Code", level: 90 },
        { name: "MySQL", level: 75 },
        { name: "JDBC", level: 70 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "text-orange-500",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Learning Agility", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What I bring to the table
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning multiple programming languages, web technologies, and essential soft skills.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.title} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Additional Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Swing (GUI)",
                "OpenCV",
                "MediaPipe",
                "Scikit-learn",
                "TensorFlow",
                "NumPy",
                "Machine Learning",
                "Desktop Applications",
                "Database Design",
                "API Development"
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;