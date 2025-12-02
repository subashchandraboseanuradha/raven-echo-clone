import { MessageSquare, BarChart3, Shield, Database, Search, Users } from "lucide-react";

const platformFeatures = [
  {
    icon: MessageSquare,
    title: "No SQL Required",
    description: "Ask questions in plain English. We generate the SQL for you.",
  },
  {
    icon: BarChart3,
    title: "Instant Charts",
    description: "Visualizations generated automatically from your queries.",
  },
  {
    icon: Shield,
    title: "Read-Only Access",
    description: "Your data stays safe with read-only database connections.",
  },
  {
    icon: Database,
    title: "Multi-Database",
    description: "Works with PostgreSQL, MySQL, Snowflake, and more.",
  },
  {
    icon: Search,
    title: "Research Mode",
    description: "Explore your data like Perplexity explores the web.",
  },
  {
    icon: Users,
    title: "White-Glove Setup",
    description: "We guide you through setup and answer all your questions.",
  },
];

const Platform = () => {
  return (
    <section id="platform" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Platform</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for business operators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to turn your database into a research tool. No data analyst required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-mono">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
