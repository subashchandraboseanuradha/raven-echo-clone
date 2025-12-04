import { FileText, Clock, Database, BarChart3 } from "lucide-react";

const profiles = [
  { id: 1, initials: "JD", color: "bg-blue-500", top: "10%", left: "55%" },
  { id: 2, initials: "AM", color: "bg-amber-500", top: "5%", left: "65%" },
  { id: 3, initials: "SK", color: "bg-purple-500", top: "15%", left: "75%" },
  { id: 4, initials: "LM", color: "bg-teal-500", top: "20%", left: "58%" },
  { id: 5, initials: "RK", color: "bg-rose-500", top: "25%", left: "68%" },
  { id: 6, initials: "PT", color: "bg-indigo-500", top: "35%", left: "52%" },
  { id: 7, initials: "NB", color: "bg-green-500", top: "40%", left: "62%" },
  { id: 8, initials: "CM", color: "bg-orange-500", top: "45%", left: "72%" },
  { id: 9, initials: "DW", color: "bg-cyan-500", top: "50%", left: "56%" },
  { id: 10, initials: "EF", color: "bg-pink-500", top: "55%", left: "66%" },
  { id: 11, initials: "GH", color: "bg-violet-500", top: "60%", left: "76%" },
  { id: 12, initials: "IJ", color: "bg-lime-500", top: "65%", left: "60%" },
  { id: 13, initials: "KL", color: "bg-red-500", top: "70%", left: "70%" },
  { id: 14, initials: "MN", color: "bg-sky-500", top: "75%", left: "54%" },
  { id: 15, initials: "OP", color: "bg-emerald-500", top: "80%", left: "64%" },
];

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

          {/* Right Animation */}
          <div className="relative h-[500px]">
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                </linearGradient>
              </defs>
              {/* Animated connection lines */}
              <path
                d="M 150 80 Q 200 120 250 100 T 350 150"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 180 150 Q 250 180 300 200 T 400 220"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M 120 220 Q 200 250 280 280 T 420 300"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <path
                d="M 160 300 Q 240 320 320 350 T 450 380"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
              <path
                d="M 200 380 Q 280 400 360 420 T 480 440"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
            </svg>

            {/* Profile Avatars */}
            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg animate-fade-in"
                style={{
                  top: profile.top,
                  left: profile.left,
                  animationDelay: `${index * 0.1}s`,
                  zIndex: 10,
                }}
              >
                <div className={`w-full h-full rounded-full ${profile.color} flex items-center justify-center ring-2 ring-background/20`}>
                  {profile.initials}
                </div>
                {/* Green connection dot */}
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-foreground animate-pulse" />
              </div>
            ))}

            {/* Floating Icons */}
            <div 
              className="absolute top-[20%] right-[5%] w-10 h-10 bg-background/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.8s", zIndex: 10 }}
            >
              <FileText className="w-5 h-5 text-background/60" />
            </div>
            <div 
              className="absolute top-[45%] right-[2%] w-10 h-10 bg-background/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "1.2s", zIndex: 10 }}
            >
              <Clock className="w-5 h-5 text-background/60" />
            </div>
            <div 
              className="absolute top-[70%] right-[8%] w-10 h-10 bg-background/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "1.6s", zIndex: 10 }}
            >
              <Database className="w-5 h-5 text-background/60" />
            </div>
            <div 
              className="absolute top-[85%] right-[15%] w-10 h-10 bg-background/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "2s", zIndex: 10 }}
            >
              <BarChart3 className="w-5 h-5 text-background/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkAnimation;
