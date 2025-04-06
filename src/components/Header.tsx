
import React from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
  scrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
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

export default Header;
