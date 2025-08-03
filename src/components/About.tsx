import { Card } from "./ui/card";

export function About() {
  const values = [
    {
      title: "Strategic Vision",
      description: "We help you develop clear, actionable strategies that align with your business goals and market opportunities."
    },
    {
      title: "Cultural Transformation",
      description: "Transform your organizational culture to support innovation, growth, and sustainable success."
    },
    {
      title: "Leadership Development",
      description: "Develop strong leaders at every level who can drive change and inspire their teams."
    },
    {
      title: "Measurable Results",
      description: "Every engagement is designed to deliver tangible, measurable improvements to your business performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-secondary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
            Driving Transformation Through Expert Coaching
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Proact, we believe that sustainable business transformation requires more than just strategy – 
            it requires a fundamental shift in how organizations think, operate, and evolve. Our proven 
            methodology combines strategic insight with practical implementation to deliver lasting results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-card to-secondary/20 border-border">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}