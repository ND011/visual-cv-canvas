
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const GithubHostingInfo: React.FC = () => {
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

export default GithubHostingInfo;
