
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  bio: string;
  resumeUrl?: string;
}

const About: React.FC<AboutProps> = ({ bio, resumeUrl }) => {
  // Split bio by newline characters to render each paragraph separately
  const bioParagraphs = bio.split('\n');

  return (
    <section id="about" className="py-16 px-6 md:px-10 bg-secondary/50 animate-fade-in section-delay-1">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        
        <Card className="bg-white border-none shadow-md">
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <ul className="list-disc pl-5 space-y-2">
                {bioParagraphs.map((paragraph, index) => (
                  <li key={index} className="text-lg leading-relaxed">{paragraph}</li>
                ))}
              </ul>
            </div>
            
            {resumeUrl && (
              <div className="mt-8">
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Download Resume</span>
                  </Button>
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
