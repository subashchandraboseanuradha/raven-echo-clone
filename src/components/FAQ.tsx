import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Do I need to know SQL?",
    answer: "No! Raven is designed for business operators who don't know SQL. Just ask questions in plain English, and we'll generate the SQL for you automatically.",
  },
  {
    question: "What databases does Raven support?",
    answer: "Raven works with PostgreSQL, MySQL, Snowflake, BigQuery, and many more. If you have a specific database, reach out to us and we'll let you know if it's supported.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use read-only database connections, meaning we can never modify your data. All connections are encrypted, and we don't store your raw data.",
  },
  {
    question: "How is Raven different from other tools?",
    answer: "Raven is built specifically for business operators, not data analysts. Our research mode lets you explore data conversationally, like using Perplexity for the web.",
  },
  {
    question: "How much does Raven cost?",
    answer: "We offer flexible pricing based on your usage and team size. Contact us for a personalized quote that fits your needs.",
  },
  {
    question: "How do I connect my database?",
    answer: "Our white-glove onboarding team will guide you through the entire setup process. We'll help you configure secure connections and answer any questions along the way.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about Raven
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center mt-10 text-muted-foreground">
          More questions?{" "}
          <a href="mailto:support@raven.ai" className="text-primary hover:underline">
            Contact us →
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
