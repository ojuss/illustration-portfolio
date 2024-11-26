import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Portfolio />
      <AboutSection />
      <Contact />
    </main>
  );
}
