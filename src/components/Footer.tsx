const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Raven</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="mailto:support@raven.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Raven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
