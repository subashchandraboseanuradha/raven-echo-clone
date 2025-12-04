import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";

const suggestedQuestions = [{
  category: "Product",
  question: "Are there any features we've added that have increased engagement?"
}, {
  category: "Marketing",
  question: "Are we seeing a drop in lead volume year over year?"
}, {
  category: "Sales",
  question: "What accounts have had the largest expansions this quarter?"
}, {
  category: "Engineering",
  question: "What are the most common errors this month?"
}, {
  category: "Data & Analytics",
  question: "Trend key KPIs over time and flag abnormal spikes."
}];

const Hero = () => {
  return <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
          Your AI <span className="text-gradient">Data Analyst</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          Let your whole team make data-based decisions
        </p>

        {/* Chat Input */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 text-left">
                <p className="text-muted-foreground text-sm font-mono">What data questions do you have?</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              
              <Button variant="secondary" size="sm" className="gap-2">
                <Command className="w-3 h-3" />
                Try it
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <Button variant="hero" size="default">
            Book a demo
          </Button>
        </div>

        {/* Suggested Questions */}
        <div className="animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          
        </div>
      </div>
    </section>;
};
export default Hero;
