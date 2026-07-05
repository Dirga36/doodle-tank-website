import Image from "next/image";
import { ModeToggle } from "@/components/features/mode-toggle";
import { GitHubStarsButton } from "@/components/animate-ui/components/buttons/github-stars";

import BackToTop from "@/components/features/back-to-top";
import MainContent from "@/components/features/main/main-content";
import AsideContent from "@/components/features/aside/aside-content";

export default function Home() {
  return (
    <div className="relative min-h-screen mt-10">
      <header id="top">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="https://github.com/Dirga36/Doodle-Tank"
            aria-label="Doodle Tank on GitHub"
            className="inline-flex h-10 items-center justify-center "
          >
            <GitHubStarsButton
              username="Dirga36"
              repo="Doodle-Tank"
              variant={"ghost"}
              className="border border-black"
            />
          </a>
          <nav className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
            <a
              className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              href="#features"
            >
              Features
            </a>
            <a
              className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              href="#faq"
            >
              FAQ
            </a>
            <div>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/*<!-- Main Content -->*/}
      <MainContent />

      {/*<!-- Aside Content -->*/}
      <AsideContent />

      <BackToTop />

      <footer className="border-t border-foreground/10 mt-5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-sm text-muted-foreground">
          <span>2025 Doodle Tank | by Dirge/Fuad</span>
          <a
            className="inline-flex items-center justify-center"
            href="https://www.dicoding.com/users/fuad_husnan1yhz/academies"
          >
            <Image
              src="/images/icons/dicodingicon.png"
              width={20}
              height={20}
              alt="dicoding-profile"
              className="h-5 w-5"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
