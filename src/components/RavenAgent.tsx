import { FileText, BarChart3, Table, PenLine, Filter, LayoutGrid, FileSpreadsheet, Settings } from "lucide-react";

const benefits = [
  "Self-serve",
  "Instant",
  "Collaborative",
  "Single source of truth",
  "Real-time",
  "Shared reports",
];

// Profile avatars grid data - icons positioned next to avatars
const avatarGrid = [
  { row: 0, col: 0, icon: FileText },
  { row: 0, col: 1, icon: Filter },
  { row: 0, col: 2, icon: FileText },
  { row: 1, col: 0, icon: FileSpreadsheet },
  { row: 1, col: 1, icon: FileSpreadsheet },
  { row: 1, col: 2, icon: FileSpreadsheet },
  { row: 2, col: 0, icon: FileText },
  { row: 2, col: 1, icon: FileText },
  { row: 2, col: 2, icon: Filter },
  { row: 3, col: 0, icon: Table },
  { row: 3, col: 1, icon: FileSpreadsheet },
  { row: 3, col: 2, icon: BarChart3 },
  { row: 4, col: 0, icon: PenLine },
  { row: 4, col: 1, icon: LayoutGrid },
  { row: 4, col: 2, icon: Settings },
  { row: 5, col: 0, icon: PenLine },
  { row: 5, col: 1, icon: FileText },
  { row: 5, col: 2, icon: Table },
  { row: 6, col: 0, icon: LayoutGrid },
  { row: 6, col: 1, icon: FileText },
  { row: 6, col: 2, icon: PenLine },
];

// Sample avatar images using placeholder initials
const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65adc7?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
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

          {/* Right - Avatar Grid with Icons */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
              {avatarGrid.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    {/* Avatar with green dot */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-border/30">
                        <img 
                          src={avatars[index % avatars.length]} 
                          alt="Team member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0DFF00]" />
                    </div>
                    {/* Icon */}
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RavenAgent;
