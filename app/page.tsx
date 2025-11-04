import Hero from '@/components/doodle/Hero';
import Features from '@/components/doodle/Features';
import Gallery from '@/components/doodle/Gallery';
import FAQ from '@/components/doodle/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <FAQ />
      <footer>
        <p>© 2025 Doodle Tank — A Minecraft Addon by <b>Dirge</b></p>
      </footer>
    </div>
  );
}