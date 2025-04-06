
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'lucide-react';

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  imageUrl?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 px-6 md:px-10 bg-secondary/50 animate-fade-in section-delay-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md overflow-hidden animate-slide-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  
                  {project.projectUrl && (
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Link className="h-5 w-5" />
                      <span className="sr-only">Project link</span>
                    </a>
                  )}
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
