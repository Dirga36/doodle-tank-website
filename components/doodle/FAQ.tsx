"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    { q: "Which Minecraft version is supported?", a: "This addon works with Bedrock 1.21+." },
    { q: "How do I install it?", a: 'Instructions in the <a href="https://github.com/Dirga36/Doodle-Tank/wiki/Instalation"><b>Wiki</b></a>' },
    { q: "Is it multiplayer compatible?", a: "Yes! Works on local and Realm worlds." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold">FAQ</h2>
      <div className="mt-6">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item border-b border-dashed border-black my-4 pb-2">
            <Button
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center justify-between gap-4"
              aria-expanded={openIndex === i}
>
              <span className="font-medium">{f.q}</span>
              <span className="text-muted-foreground">{openIndex === i ? '−' : '+'}</span>
            </Button>

            {openIndex === i && (
              <div 
                className="mt-2 text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
