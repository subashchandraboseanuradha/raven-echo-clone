import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-xl font-bold text-foreground font-mono">Raven</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">Features</a>
            <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">Platform</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log in</Button>
          <Button variant="hero" size="sm">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
