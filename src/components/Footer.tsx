
import React from 'react';
import { Github } from 'lucide-react';

interface FooterProps {
  githubRepoUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ githubRepoUrl }) => {
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

export default Footer;
