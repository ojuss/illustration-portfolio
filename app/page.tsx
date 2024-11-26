import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}