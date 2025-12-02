const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-xl font-bold text-foreground font-mono">Raven</span>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">Features</a>
            <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">Platform</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">FAQ</a>
          </div>
          <div className="text-sm text-muted-foreground font-mono">© 2024 Raven. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
