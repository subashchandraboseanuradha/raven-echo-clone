import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "How does it work?", answer: "Connect your database with read-only credentials. Ask questions in plain English. We translate your questions to SQL, run the query, and generate visualizations automatically." },
  { question: "Is my data safe?", answer: "Yes. We use read-only database connections, so we can never modify your data. All connections are encrypted, and we never store your raw data." },
  { question: "What databases do you support?", answer: "We currently support PostgreSQL, MySQL, Snowflake, BigQuery, and Redshift. More coming soon." },
  { question: "Do I need to know SQL?", answer: "No. Ask questions in plain English, and we'll generate the SQL for you." },
  { question: "How accurate are the results?", answer: "Our AI achieves 99%+ accuracy on common business queries." },
  { question: "What's the pricing?", answer: "We offer a 14-day free trial with no credit card required. Plans start at $49/month." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">Questions & Answers</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30">
              <AccordionTrigger className="text-left font-mono font-semibold text-foreground hover:text-primary hover:no-underline py-5">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
