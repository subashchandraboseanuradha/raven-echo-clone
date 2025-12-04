import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to unlock your data?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">Start asking questions in plain English. Get charts and insights in seconds.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg">Book a demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
