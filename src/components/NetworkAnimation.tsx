import { useEffect, useRef } from "react";

const painPoints = [
  "Bottlenecks",
  "Slow turnaround",
  "Last minute requests",
  "Old data",
  "Floating csvs and exports",
  "Conflicting reports",
  "Multiple data tools",
  "Security gaps",
];

const NetworkAnimation = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch and inline the SVG for animation control
    const loadSvg = async () => {
      try {
        const response = await fetch("/assets/network-diagram.svg");
        const svgText = await response.text();
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = svgText;
          // Add animation class to paths
          const paths = svgContainerRef.current.querySelectorAll('path[stroke-dasharray]');
          paths.forEach((path, index) => {
            path.classList.add('animated-path');
            (path as HTMLElement).style.animationDelay = `${index * 0.2}s`;
          });
        }
      } catch (error) {
        console.error("Failed to load SVG:", error);
      }
    };
    loadSvg();
  }, []);

  return (
    <section className="py-20 px-6 bg-foreground overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="text-background">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional data analytics
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-md">
              With other BI tools or even modern MCP workflows, only technical teammates can get data insights.
            </p>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-background/80 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-background/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Animation - Inline SVG Network */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div 
              ref={svgContainerRef}
              className="network-svg-container w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      <style>{`
        .network-svg-container svg {
          width: 100%;
          height: auto;
        }
        
        .network-svg-container .animated-path {
          stroke-dasharray: 8 4;
          animation: dashMove 3s linear infinite;
        }
        
        @keyframes dashMove {
          to {
            stroke-dashoffset: -24;
          }
        }
        
        .network-svg-container circle[fill="#0DFF00"] {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default NetworkAnimation;
