import { MoveUp } from "lucide-react";

export default function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-20 bg-black dark:bg-white right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 text-foreground shadow-lg backdrop-blur transition hover:-translate-y-0.5"
    >
      <MoveUp className="text-white dark:text-black h-5 w-5" />
    </a>
  );
}
