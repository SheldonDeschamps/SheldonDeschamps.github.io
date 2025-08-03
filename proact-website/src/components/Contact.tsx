import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "hello@proactcoaching.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "New York, NY"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary via-accent to-secondary relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today to discuss how we can help 
            you achieve your transformation goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary bg-secondary p-2 rounded-lg">{info.icon}</div>
                    <div>
                      <p className="text-muted-foreground">{info.title}</p>
                      <p className="text-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="mb-4 text-foreground">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm">
            <h3 className="mb-6 text-foreground">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="bg-input-background" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-input-background" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" className="bg-input-background" />
              </div>
              <div>
                <Label htmlFor="company" className="text-foreground">Company</Label>
                <Input id="company" placeholder="Your Company" className="bg-input-background" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your transformation goals..."
                  rows={4}
                  className="bg-input-background"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}