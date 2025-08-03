import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const testimonials = [
    {
      quote: "Proact transformed our entire organization. Their strategic approach and hands-on coaching helped us increase efficiency by 40% while building a stronger, more unified culture.",
      author: "Sarah Chen",
      position: "CEO, TechVision Corp",
      company: "Technology"
    },
    {
      quote: "The leadership coaching program was a game-changer. It not only improved my decision-making skills but also helped me build a more effective team.",
      author: "Michael Rodriguez",
      position: "VP Operations, GrowthFirst",
      company: "Manufacturing"
    },
    {
      quote: "Working with Proact on our strategic planning gave us the clarity and direction we needed to successfully navigate our market expansion.",
      author: "Jennifer Park",
      position: "Founder, InnovateLab",
      company: "Healthcare"
    }
  ];

  const team = [
    {
      name: "Alexandra Thompson",
      role: "Founder & Lead Coach",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=300&h=300&fit=crop"
    },
    {
      name: "David Mitchell",
      role: "Strategic Planning Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Rachel Foster",
      role: "Organizational Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced coaches bring decades of combined expertise in business transformation, 
            strategic planning, and organizational development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-secondary rounded-full scale-110 opacity-20"></div>
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover relative z-10"
                />
              </div>
              <h3 className="mb-2 text-foreground">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </Card>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border">
              <div className="mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-primary">{testimonial.position}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}