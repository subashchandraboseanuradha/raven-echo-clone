import { Search, BarChart3, MessageSquare, Database } from "lucide-react";
const features = [{
  icon: Search,
  title: "Research Mode",
  description: "Explore your data like Perplexity explores the web. Ask complex questions, get comprehensive answers."
}, {
  icon: BarChart3,
  title: "Instant Charts",
  description: "Visualizations generated automatically. See trends, patterns, and outliers at a glance."
}, {
  icon: MessageSquare,
  title: "Plain English",
  description: "No SQL required. Just ask questions naturally and get instant insights from your database."
}, {
  icon: Database,
  title: "Multi-Database",
  description: "Works with PostgreSQL, MySQL, Snowflake, and more. Connect your data, start exploring."
}];
const stats = [{
  value: "30x",
  label: "Faster insights"
}, {
  value: "99%",
  label: "Query accuracy"
}, {
  value: "20x",
  label: "Time saved"
}];
const Features = () => {
  return <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        

        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ask questions in plain English. Get instant answers and charts from your database.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map(feature => <div key={feature.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;