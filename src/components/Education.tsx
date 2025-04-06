
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book } from 'lucide-react';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface EducationProps {
  educations: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <section id="education" className="py-16 px-6 md:px-10 bg-secondary/50 animate-fade-in section-delay-3">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center">
          <Book className="mr-2 h-7 w-7" />
          Education
        </h2>
        
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md animate-slide-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-1">{edu.institution}</h3>
                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                {edu.description && (
                  <p className="mt-2">{edu.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
