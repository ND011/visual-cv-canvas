
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-16 px-6 md:px-10 animate-fade-in section-delay-4"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-5">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1 + 0.3}s` 
                          }}
                        ></div>
                      </div>
                    </div>
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

export default Skills;
