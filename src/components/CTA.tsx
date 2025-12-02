import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-6">
          Stop Guessing. Start Knowing.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Your data analyst is one click away. No hiring, no SQL, no spreadsheets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg">
            Try Demo
          </Button>
          <Button variant="heroOutline" size="lg">
            Book Onboarding
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
