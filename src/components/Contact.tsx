
import React, { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactProps {
  email: string;
  phone?: string;
  address?: string;
  message?: string;
}

const Contact = forwardRef<HTMLElement, ContactProps>(
  ({ email, phone, address, message }, ref) => {
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
  }
);

Contact.displayName = 'Contact';

export default Contact;
