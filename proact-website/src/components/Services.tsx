import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      title: "Organizational Transformation",
      description: "Complete organizational restructuring and process optimization to improve efficiency and performance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      features: ["Change Management", "Process Optimization", "Cultural Alignment", "Performance Metrics"]
    },
    {
      title: "Leadership Coaching",
      description: "One-on-one executive coaching and leadership development programs for senior management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      features: ["Executive Coaching", "Leadership Skills", "Decision Making", "Team Building"]
    },
    {
      title: "Strategic Planning",
      description: "Comprehensive strategic planning sessions to define vision, goals, and actionable roadmaps.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      features: ["Vision Development", "Goal Setting", "Market Analysis", "Implementation Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary to-accent relative">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-accent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive coaching services tailored to your specific transformation needs, 
            from strategic planning to cultural change management.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}