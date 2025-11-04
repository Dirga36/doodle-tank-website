"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "Which Minecraft version is supported?", a: "This addon works with Bedrock 1.21+." },
    { q: "How do I install it?", a: "Download the `.mcaddon` file and import it into Minecraft." },
    { q: "Is it multiplayer compatible?", a: "Yes! Works on local and Realm worlds." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold">FAQ</h2>

      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center justify-between gap-4"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium">{f.q}</span>
              <span className="text-muted-foreground">{openIndex === i ? '−' : '+'}</span>
            </button>

            <div className={`mt-3 text-sm text-muted-foreground ${openIndex === i ? 'block' : 'hidden'}`}>
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
