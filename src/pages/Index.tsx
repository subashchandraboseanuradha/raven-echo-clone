import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NetworkAnimation from "@/components/NetworkAnimation";
import RavenAgent from "@/components/RavenAgent";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <NetworkAnimation />
        <RavenAgent />
        <Features />
        <Platform />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
