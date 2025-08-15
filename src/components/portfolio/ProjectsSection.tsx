import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Student Record Management System",
      description: "Built a Java-based desktop application with a GUI using Swing to manage student records. The system allows adding, updating, and viewing student data including enrollment number, name, class, subject, and attendance. Integrated with a MySQL database to persist data and dynamically update records through the UI.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Java", "Swing (GUI)", "MySQL", "JDBC"],
      featured: true,
      links: {
        github: "#"
      }
    },
    {
      title: "Fitness Activity Recognition System",
      description: "Built a real-time system to detect exercises, count reps, and analyze posture using MediaPipe and machine learning, helping users improve workout form and avoid injuries. Implemented computer vision techniques for accurate pose estimation and movement tracking.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "TensorFlow", "NumPy"],
      featured: true,
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <FolderOpen className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Things I've built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my technical skills and passion for creating innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={project.title} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;