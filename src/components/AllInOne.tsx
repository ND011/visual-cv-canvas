
import React, { useRef, useState, forwardRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, ArrowDown, Book, BookUser, Briefcase, Link, FileText } from 'lucide-react';

// Type definitions
export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
  projects?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  imageUrl?: string;
}

export interface Reference {
  name: string;
  position: string;
  contact: string;
  relationship: string;
}

// Header Component
export const Header: React.FC<{
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
  scrollToContact: () => void;
}> = ({
  name,
  title,
  email,
  github,
  linkedin,
  scrollToContact
}) => {
  return (
    <header className="min-h-[60vh] flex flex-col justify-center relative overflow-hidden bg-primary py-20 px-6 md:px-10 animate-fade-in">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground mb-3">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/80 mb-6 md:mb-8">
          {title}
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg">
          {email}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Button variant="outline" size="icon" className="rounded-full border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
          )}
          
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Button variant="outline" size="icon" className="rounded-full border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToContact}
          className="animate-pulse-slow text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </button>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
    </header>
  );
};

// About Component
export const About: React.FC<{
  bio: string;
  resumeUrl?: string;
}> = ({ bio, resumeUrl }) => {
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

// Experience Component
export const Experience: React.FC<{experiences: ExperienceItem[]}> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 px-6 md:px-10 animate-fade-in section-delay-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center">
          <Briefcase className="mr-2 h-7 w-7" />
          Experience
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
                    
                    {job.projects && job.projects.length > 0 && (
                      <div className="mb-4">
                        <ul className="list-disc pl-5 space-y-2">
                          {job.projects.map((project, pIndex) => (
                            <li key={pIndex}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
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

// Education Component
export const Education: React.FC<{educations: EducationItem[]}> = ({ educations }) => {
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

// Skills Component
export const Skills: React.FC<{skillCategories: SkillCategory[]}> = ({ skillCategories }) => {
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

// Projects Component
export const Projects: React.FC<{projects: ProjectItem[]}> = ({ projects }) => {
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

// References Component
export const References: React.FC<{references: Reference[]}> = ({ references }) => {
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

// Contact Component
export const Contact = forwardRef<HTMLElement, {
  email: string;
  phone?: string;
  address?: string;
  message?: string;
}>(({ email, phone, address, message }, ref) => {
  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-16 px-6 md:px-10 animate-fade-in"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
        
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              {message && (
                <p className="mb-6 text-center">{message}</p>
              )}
              
              <div className="space-y-4">
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Email</span>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                
                {phone && (
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Phone</span>
                    <a 
                      href={`tel:${phone}`} 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                
                {address && (
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Location</span>
                    <span>{address}</span>
                  </div>
                )}
                
                <div className="pt-3 flex justify-center">
                  <a href={`mailto:${email}`}>
                    <Button>Send Email</Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

// Footer Component
export const Footer: React.FC<{
  githubRepoUrl?: string;
}> = ({ githubRepoUrl }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-10 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p>© {year} - All rights reserved</p>
        </div>
        
        <div className="flex items-center gap-2">
          <span>View this on</span>
          {githubRepoUrl ? (
            <a 
              href={githubRepoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-primary-foreground/70">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </span>
          )}
        </div>
      </div>
    </footer>
  );
};

// GithubHostingInfo Component
export const GithubHostingInfo: React.FC = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <Card className="border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>GitHub Pages Hosting Guide</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <p>
                This CV platform is designed to be easily hosted on GitHub Pages. Follow these steps to deploy your own version:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Fork this repository</strong> to your GitHub account
                </li>
                <li>
                  <strong>Customize the CV data</strong> in the <code>src/components/CV.tsx</code> file with your personal information
                </li>
                <li>
                  Update the <code>vite.config.ts</code> file to add a base path matching your repository name:
                  <div className="bg-muted p-3 rounded my-2">
                    <code>{`base: '/your-repo-name/'`}</code>
                  </div>
                </li>
                <li>
                  <strong>Build the project</strong> with <code>npm run build</code>
                </li>
                <li>
                  In your GitHub repository settings, go to <strong>Pages</strong> and set the source to the <code>gh-pages</code> branch
                </li>
                <li>
                  Run <code>npm run deploy</code> to publish to GitHub Pages
                </li>
              </ol>
              
              <div className="bg-muted p-4 rounded-md mt-6">
                <p className="font-medium mb-2">Note for setup:</p>
                <p className="text-sm">
                  You'll need to install <code>gh-pages</code> package and add a deploy script to your package.json:
                </p>
                <pre className="bg-primary/5 p-2 rounded mt-2 overflow-auto text-sm">
                  <code>{`npm install --save-dev gh-pages\n\n// Add to package.json scripts:\n"deploy": "gh-pages -d dist"`}</code>
                </pre>
              </div>
              
              <div className="flex justify-center mt-4">
                <a 
                  href="https://pages.github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    Learn more about GitHub Pages
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
