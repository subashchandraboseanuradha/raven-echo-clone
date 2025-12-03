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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Research Mode - Tall Left Card */}
          <div className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col overflow-hidden relative group hover:border-primary/50 transition-colors">
            <div className="mb-4 z-10">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Research Mode</span>
              <h3 className="text-xl font-semibold text-foreground mt-2">Deep Data Exploration</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-6 z-10">
              Explore your data like Perplexity explores the web. Ask complex questions, get comprehensive answers with full context.
            </p>
            
            {/* Terminal Graphic */}
            <div className="flex-1 flex flex-col justify-end z-10">
              <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
                <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">query.sql</span>
                </div>
                <div className="p-4 font-mono text-xs space-y-1">
                  <p className="text-primary">&gt; analyzing sales_data...</p>
                  <p className="text-muted-foreground">SELECT product, SUM(revenue)</p>
                  <p className="text-muted-foreground">FROM sales WHERE year = 2024</p>
                  <p className="text-muted-foreground">GROUP BY product ORDER BY revenue DESC</p>
                  <p className="text-primary mt-3">✓ Found 3 key insights</p>
                  <p className="text-muted-foreground/70">↳ Revenue up 24% YoY</p>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" className="text-primary" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid1)" />
              </svg>
            </div>
          </div>

          {/* Instant Charts - Top Right */}
          <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col overflow-hidden relative group hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Instant Charts</span>
              <h3 className="text-lg font-semibold text-foreground mt-1">Auto Visualizations</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Charts generated automatically from your queries.
            </p>
            
            {/* Chart Graphic */}
            <div className="flex-1 flex items-end justify-between gap-1 px-2">
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-8 bg-gradient-to-t from-primary/60 to-primary/30 rounded-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-12 bg-gradient-to-t from-primary/70 to-primary/40 rounded-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-16 bg-gradient-to-t from-primary/80 to-primary/50 rounded-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-10 bg-gradient-to-t from-primary/65 to-primary/35 rounded-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-20 bg-gradient-to-t from-primary to-primary/60 rounded-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full max-w-6 h-14 bg-gradient-to-t from-primary/75 to-primary/45 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Multi-Database - Middle Right */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="mb-2">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Multi-Database</span>
            </div>
            <p className="text-muted-foreground text-xs mb-3">
              PostgreSQL, MySQL, Snowflake & more
            </p>
            
            {/* Database Icons Grid */}
            <div className="grid grid-cols-3 gap-1.5 flex-1">
              {[
                { name: 'PG', color: 'bg-blue-500/20 text-blue-400' },
                { name: 'MY', color: 'bg-orange-500/20 text-orange-400' },
                { name: 'SF', color: 'bg-cyan-500/20 text-cyan-400' },
                { name: 'BQ', color: 'bg-green-500/20 text-green-400' },
                { name: 'RS', color: 'bg-red-500/20 text-red-400' },
                { name: '+5', color: 'bg-muted text-muted-foreground' },
              ].map((db) => (
                <div
                  key={db.name}
                  className={`aspect-square rounded-lg border border-border flex items-center justify-center text-[10px] font-mono font-medium ${db.color} group-hover:scale-105 transition-transform`}
                >
                  {db.name}
                </div>
              ))}
            </div>
          </div>

          {/* Plain English - Bottom Middle */}
          <div className="bg-card border border-border rounded-2xl p-5 flex flex-col overflow-hidden relative group hover:border-primary/50 transition-colors">
            <div className="mb-2">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Natural Language</span>
            </div>
            <p className="text-muted-foreground text-xs mb-3">
              No SQL required. Just ask naturally.
            </p>
            
            {/* Chat Bubble Graphic */}
            <div className="flex-1 flex flex-col justify-end gap-2">
              <div className="bg-muted/50 rounded-xl rounded-bl-sm px-3 py-2 text-[10px] text-foreground self-start max-w-[85%]">
                "Show me top products by revenue"
              </div>
              <div className="bg-primary/20 rounded-xl rounded-br-sm px-3 py-2 text-[10px] text-primary self-end max-w-[85%]">
                ✓ Found 12 products...
              </div>
            </div>
          </div>

          {/* Security - Bottom Card */}
          <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex overflow-hidden relative group hover:border-primary/50 transition-colors">
            <div className="flex-1">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Enterprise Security</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">SOC 2 Compliant</h3>
              <p className="text-muted-foreground text-sm">
                Your data never leaves your infrastructure. Read-only access with full audit logs.
              </p>
            </div>
            
            {/* Shield Graphic */}
            <div className="flex items-center justify-center w-24 relative">
              <div className="absolute w-20 h-20 rounded-full bg-primary/10 animate-pulse"></div>
              <svg className="w-12 h-12 text-primary relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
