import { Search, BarChart3, MessageSquare, Database } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask questions in plain English. Get instant answers and charts from your database.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Research Mode - Large Left Card */}
          <div className="md:row-span-2 bg-card border border-border rounded-lg p-6 flex flex-col">
            <div className="mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Research Mode</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Explore your data like Perplexity explores the web. Ask complex questions, get comprehensive answers.
            </p>
            {/* Terminal Graphic */}
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="bg-muted/50 px-3 py-2 border-b border-border flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                </div>
                <div className="p-4 font-mono text-xs text-muted-foreground">
                  <p className="text-primary">&gt; analyzing sales_data...</p>
                  <p className="mt-2">SELECT product, SUM(revenue)</p>
                  <p>FROM sales WHERE year = 2024</p>
                  <p>GROUP BY product</p>
                  <p className="mt-2 text-primary">✓ Found 3 insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Charts - Top Middle */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Instant Charts</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Visualizations generated automatically. See trends, patterns, and outliers at a glance.
            </p>
            {/* Chart Graphic */}
            <div className="flex items-end justify-center gap-2 h-20">
              <div className="w-6 bg-primary/20 rounded-t" style={{ height: '40%' }}></div>
              <div className="w-6 bg-primary/30 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-6 bg-primary/40 rounded-t" style={{ height: '80%' }}></div>
              <div className="w-6 bg-primary rounded-t" style={{ height: '100%' }}></div>
              <div className="w-6 bg-primary/60 rounded-t" style={{ height: '70%' }}></div>
            </div>
          </div>

          {/* Multi-Database - Top Right */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Multi-Database</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Works with PostgreSQL, MySQL, Snowflake, and more.
            </p>
            {/* Database Icons Grid */}
            <div className="grid grid-cols-3 gap-2">
              {['PostgreSQL', 'MySQL', 'Snowflake', 'BigQuery', 'Redshift', '+'].map((db, i) => (
                <div
                  key={db}
                  className={`aspect-square rounded border border-border flex items-center justify-center text-xs font-mono ${
                    i === 5 ? 'bg-muted/30 text-muted-foreground' : 'bg-background text-foreground'
                  }`}
                >
                  {db === '+' ? '+' : db.slice(0, 2).toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* Plain English - Bottom Middle */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Plain English</span>
            </div>
            <p className="text-muted-foreground text-sm">
              No SQL required. Just ask questions naturally and get instant insights from your database.
            </p>
          </div>

          {/* Integrated - Bottom Right */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Integrated</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Connect to your existing tools. Works with Slack, Teams, and your favorite BI platforms.
            </p>
            {/* Puzzle Graphic */}
            <div className="flex justify-center gap-1">
              <div className="w-10 h-10 border border-border rounded bg-muted/20"></div>
              <div className="w-10 h-10 border border-border rounded bg-muted/40 -ml-2 mt-2"></div>
              <div className="w-10 h-10 border border-border rounded bg-muted/30 -ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
