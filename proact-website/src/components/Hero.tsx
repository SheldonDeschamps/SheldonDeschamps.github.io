import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary via-accent to-secondary py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
              Accompagnateur du changement dans le bien être et la performance
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PRO ACT est l'un des acteurs majeurs dans la transformation des organisations. En plaçant l'humain et l'agilité au coeur des organisation, nous permettons à
              nos clients de vivre toute transformation organisationnelle et technologique dans le bien-être et la résilience
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3">
                Start Your Transformation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/30 rounded-lg transform rotate-3 scale-105 opacity-60"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Business coaching session"
              className="rounded-lg shadow-lg w-full h-96 object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}