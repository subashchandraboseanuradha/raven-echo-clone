import { Search, BarChart3, MessageSquare, Database } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Research Mode",
    description: "Explore your data like Perplexity explores the web. Ask complex questions, get comprehensive answers.",
  },
  {
    icon: BarChart3,
    title: "Instant Charts",
    description: "Visualizations generated automatically. See trends, patterns, and outliers at a glance.",
  },
  {
    icon: MessageSquare,
    title: "Plain English",
    description: "No SQL required. Just ask questions naturally and get instant insights from your database.",
  },
  {
    icon: Database,
    title: "Multi-Database Support",
    description: "Works with PostgreSQL, MySQL, Snowflake, and more. Connect your data, start exploring.",
  },
];

const questionCards = [
  {
    category: "Growth",
    question: "Which customers are most likely to churn?",
  },
  {
    category: "Revenue",
    question: "What's our revenue growth this quarter?",
  },
  {
    category: "Operations",
    question: "Where are bottlenecks in our funnel?",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask questions in plain English. Get instant answers and charts from your database.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-sans text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
            Ask questions that matter to your business
          </h3>
          <p className="text-muted-foreground">Get answers in seconds, not days</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {questionCards.map((card) => (
            <div
              key={card.category}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {card.category}
              </span>
              <p className="text-foreground mt-3 font-medium">
                "{card.question}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
