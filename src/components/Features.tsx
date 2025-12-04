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

        {/* Bento Grid - Reference Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Research Mode - Left Card */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            {/* UI Mockup Graphic */}
            <div className="flex-1 mb-6">
              <div className="bg-muted/30 rounded-xl p-4 space-y-3">
                {/* Query Input */}
                <div className="bg-background border border-border rounded-lg p-3 flex items-center gap-2">
                  <span className="text-primary text-xs">+</span>
                  <span className="text-xs text-foreground">New query</span>
                </div>
                {/* Query Items */}
                <div className="bg-background border border-border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-blue-400">SQL</span>
                      </div>
                      <span className="text-xs text-foreground">Sales Analysis</span>
                    </div>
                    <div className="w-8 h-4 rounded-full bg-primary/20"></div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">Revenue by region</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-3 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-orange-400">PY</span>
                      </div>
                      <span className="text-xs text-foreground">User Metrics</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">Active users trend</div>
                </div>
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">Deep data exploration</h3>
            <p className="text-sm text-muted-foreground">
              Explore your data like Perplexity explores the web. Ask complex questions, get comprehensive answers.
            </p>
          </div>

          {/* Instant Charts - Middle Card */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            {/* UI Mockup Graphic */}
            <div className="flex-1 mb-6">
              <div className="bg-muted/30 rounded-xl p-4">
                {/* Chart Window */}
                <div className="bg-background border border-border rounded-lg overflow-hidden">
                  <div className="px-3 py-2 border-b border-border flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
                    <span className="ml-2 text-[10px] text-muted-foreground">Chart Preview</span>
                  </div>
                  <div className="p-4">
                    {/* Bar Chart */}
                    <div className="flex items-end justify-between gap-2 h-24">
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-10 bg-gradient-to-t from-primary/70 to-primary/40 rounded-t"></div>
                        <span className="text-[8px] text-muted-foreground">Q1</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-16 bg-gradient-to-t from-primary/80 to-primary/50 rounded-t"></div>
                        <span className="text-[8px] text-muted-foreground">Q2</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-12 bg-gradient-to-t from-primary/70 to-primary/40 rounded-t"></div>
                        <span className="text-[8px] text-muted-foreground">Q3</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-20 bg-gradient-to-t from-primary to-primary/60 rounded-t"></div>
                        <span className="text-[8px] text-muted-foreground">Q4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">Auto visualizations</h3>
            <p className="text-sm text-muted-foreground">
              Charts generated automatically from your queries. Bar, line, pie, and more.
            </p>
          </div>

          {/* Multi-Database - Right Card */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            {/* UI Mockup Graphic */}
            <div className="flex-1 mb-6">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="bg-background border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 rounded bg-muted flex items-center justify-center">
                      <span className="text-[8px]">🗄️</span>
                    </div>
                    <span className="text-xs text-foreground font-medium">Connections</span>
                  </div>
                  {/* Database List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                          <span className="text-[8px] font-mono text-blue-400">PG</span>
                        </div>
                        <span className="text-xs text-foreground">PostgreSQL</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center">
                          <span className="text-[8px] font-mono text-orange-400">MY</span>
                        </div>
                        <span className="text-xs text-foreground">MySQL</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-[8px] font-mono text-cyan-400">SF</span>
                        </div>
                        <span className="text-xs text-foreground">Snowflake</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">Multi-database support</h3>
            <p className="text-sm text-muted-foreground">
              PostgreSQL, MySQL, Snowflake, BigQuery, and more connectors.
            </p>
          </div>

          {/* Natural Language - Bottom Left Wide Card */}
          <div className="md:col-span-1 bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            {/* UI Mockup Graphic */}
            <div className="flex-1 mb-6">
              <div className="bg-muted/30 rounded-xl p-4 space-y-3">
                {/* Chat Interface */}
                <div className="bg-background border border-border rounded-lg p-3">
                  <div className="bg-muted/50 rounded-lg rounded-bl-sm px-3 py-2 text-xs text-foreground mb-2 inline-block">
                    "Show me top products by revenue"
                  </div>
                  <div className="bg-primary/10 rounded-lg rounded-br-sm px-3 py-2 text-xs text-primary ml-auto max-w-[80%]">
                    ✓ Found 12 products...
                  </div>
                </div>
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">Natural language</h3>
            <p className="text-sm text-muted-foreground">
              No SQL required. Just ask naturally.
            </p>
          </div>

          {/* Order Management Style - Bottom Right Wide Card */}
          <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-6 flex-1 mb-6">
              {/* Left Panel - Results Table */}
              <div className="flex-1 bg-muted/30 rounded-xl p-4">
                <div className="bg-background border border-border rounded-lg overflow-hidden">
                  <div className="px-3 py-2 border-b border-border">
                    <span className="text-xs text-foreground font-medium">Query Results</span>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="flex items-center justify-between px-3 py-2 text-[10px]">
                      <span className="text-muted-foreground">Product</span>
                      <span className="text-muted-foreground">Revenue</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-xs">
                      <span className="text-foreground">Enterprise Plan</span>
                      <span className="text-primary font-medium">$130,098</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-xs">
                      <span className="text-foreground">Pro Plan</span>
                      <span className="text-primary font-medium">$99,781</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-xs opacity-60">
                      <span className="text-foreground">Starter Plan</span>
                      <span className="text-muted-foreground">$45,230</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Panel - Actions */}
              <div className="flex-1 bg-muted/30 rounded-xl p-4">
                <div className="bg-background border border-border rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <span className="text-green-400">✓</span> Export results
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <span className="text-muted-foreground">↗</span> Share report
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <span className="text-muted-foreground">📊</span> Create dashboard
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <span className="text-muted-foreground">⏰</span> Schedule query
                  </div>
                </div>
                {/* Status Badge */}
                <div className="mt-3 inline-flex items-center gap-1 bg-primary/20 text-primary text-[10px] px-2 py-1 rounded">
                  Data Analyst
                </div>
              </div>
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">Powerful insights features</h3>
            <p className="text-sm text-muted-foreground">
              Export, share, schedule queries, and create dashboards from your results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;


