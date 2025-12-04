const benefits = [
  "Self-serve",
  "Instant",
  "Collaborative",
  "Single source of truth",
  "Real-time",
  "Shared reports",
];

const RavenAgent = () => {
  return (
    <section className="py-20 px-6 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="text-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Raven agent
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Raven agent allows everyone to ask data questions. Engineers can shift from answering tickets and ad-hoc requests to being data advisors, managing complex pipelines, and work on production code.
            </p>
            <ul className="space-y-3">
              {benefits.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Raven SVG Image */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <img
              src="/assets/Frame raven.svg"
              alt="Raven Agent"
              className="w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RavenAgent;
