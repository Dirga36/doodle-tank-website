import Hero from '@/components/doodle/Hero';
import Features from '@/components/doodle/Features';
import Gallery from '@/components/doodle/Gallery';
import FAQ from '@/components/doodle/FAQ';

//Animated
import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Gallery />
        <FAQ />
      </main>
      <footer className="footer mt-12 border-t-2 border-black pt-4 text-sm">
        <p>© 2025 Doodle Tank | Minecraft Addon by <b>Dirge</b></p>
      </footer>
    </>
  );
}
