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
      <footer className="footer mt-12 border-t-2 border-black pt-4 text-sm">
        <p>© 2025 Doodle Tank | Minecraft Addon by <b>Dirge</b></p>
      </footer>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTvBeOF6lQf6X-sCmDGiwm2XrD2zm67RIMcqLxYX1ygUl2QlL8s00t8U3VTZrvsxBw9C0wxuoQBK1n1/pub?embedded=true"></iframe>
    </div>
  );
}
