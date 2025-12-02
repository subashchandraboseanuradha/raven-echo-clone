import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold font-sans text-foreground">
          Raven
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </a>
        </div>

        <Button variant="default" size="sm" className="hidden md:inline-flex">
          Try Demo
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
