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
      <section className="my-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Documentation</h2>
        <div className="bg-white rounded-lg shadow-lg border-2 border-black overflow-hidden">
          <iframe 
            src="https://docs.google.com/document/d/e/2PACX-1vTvBeOF6lQf6X-sCmDGiwm2XrD2zm67RIMcqLxYX1ygUl2QlL8s00t8U3VTZrvsxBw9C0wxuoQBK1n1/pub?embedded=true"
            className="w-full h-screen border-0"
            title="Doodle Tank Documentation"
          ></iframe>
        </div>
      </section>
      <footer className="footer mt-12 border-t-2 border-black pt-4 text-sm">
        <p>© 2025 Doodle Tank | Minecraft Addon by <b>Dirge</b></p>
      </footer>
    </div>
  );
}
