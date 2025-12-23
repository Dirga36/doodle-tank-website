import Hero from '@/components/doodle/Hero';
import Features from '@/components/doodle/Features';
import Gallery from '@/components/doodle/Gallery';
import FAQ from '@/components/doodle/FAQ';
import ModeToggle from '@/components/doodle/mode-toggle';
import GithubStarsUsable from '@/components/doodle/github-stars-usable';

export default function Home() {
  return (
    <>
      <main className='p-4'>
        <header>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <a href="https://github.com/Dirga36/Doodle-Tank">
                <GithubStarsUsable />
              </a>
            </div>

            <div className="flex items-center justify-end">
              <ModeToggle />
            </div>
          </div>
        </header>
        <Hero />
        <Features />
        <Gallery />
        <FAQ />
      </main>
      <footer className="footer mt-12 border-t-2 border-black pt-4 text-sm">
        <p>© 2025 Doodle Tank | by <b>Dirge</b></p>
      </footer>
    </>
  );
}
