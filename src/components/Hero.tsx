import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-tight mb-6 animate-fade-in">
          Perplexity for Your Business Data
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ask questions. Get charts and insights instantly. No data analyst required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button variant="hero" size="lg">
            Try Demo
          </Button>
          <Button variant="heroOutline" size="lg">
            Book Onboarding
          </Button>
        </div>

        <p className="text-sm text-primary font-medium mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Built by data engineers, for business operators
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm">Research Mode</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm">Instant Charts</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">Plain English</span>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg border border-border p-12 md:p-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Interactive Demo</h3>
            <p className="text-sm text-primary">
              Try asking: "What's my revenue this month?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
