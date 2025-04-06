
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 px-6 md:px-10 animate-fade-in section-delay-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center">
          <Briefcase className="mr-2 h-7 w-7" />
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md animate-slide-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-muted p-6">
                    <h3 className="font-bold text-xl mb-1">{job.company}</h3>
                    <p className="text-muted-foreground mb-2">{job.position}</p>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <p className="mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
