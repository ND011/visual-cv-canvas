
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookUser } from 'lucide-react';

interface Reference {
  name: string;
  position: string;
  contact: string;
  relationship: string;
}

interface ReferencesProps {
  references: Reference[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  if (!references || references.length === 0) {
    return null;
  }

  return (
    <section id="references" className="py-16 px-6 md:px-10 animate-fade-in section-delay-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center">
          <BookUser className="mr-2 h-7 w-7" />
          References
        </h2>
        
        <div className="space-y-6">
          {references.map((reference, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md animate-slide-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h3 className="font-bold text-xl">{reference.name}</h3>
                    <p className="text-muted-foreground">{reference.position}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="mb-2"><span className="font-semibold">{reference.relationship}:</span> {reference.contact}</p>
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

export default References;
