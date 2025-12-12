"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Gallery() {
  const images = [
    "https://placehold.co/800x400/000000/ffffff.png?text=Doodle%2BTank%2B1&font=inter",
    "https://placehold.co/800x400/000000/ffffff.png?text=Doodle%2BTank%2B2&font=inter",
    "https://placehold.co/800x400/000000/ffffff.png?text=Doodle%2BTank%2B3&font=inter",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function openAt(i: number) {
    setIndex(i);
    setOpen(true);
  }

  function next() {
    setIndex((x) => (x + 1) % images.length);
  }

  function prev() {
    setIndex((x) => (x - 1 + images.length) % images.length);
  }

  return (
    <section id="gallery" className="gallery container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center">Gallery</h2>

      <div className="gallery-grid mt-6 flex flex-wrap justify-center gap-4">
        {images.map((src, i) => (
          <Button
            key={i}
            onClick={() => openAt(i)}
            className="overflow-hidden rounded-lg bg-white hover:scale-105 transition-transform"
            aria-label={`Open image ${i + 1}`}>
            <Image
              src={src}
              alt={`Doodle Tank ${i + 1}`}
              width={500}
              height={500}
              className="border-2 border-black rounded-md w-64 h-40 object-cover">
            </Image>
          </Button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-4xl w-full">
            <Image
              src={images[index]}
              alt={`Doodle Tank ${index + 1}`}
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg">
            </Image>

            <div className="mt-3 flex items-center justify-between gap-3">
              <Button onClick={prev} className="px-3 py-1 border-2 border-black bg-white rounded-md">◀</Button>
              <div className="text-sm text-muted-foreground">{index + 1} / {images.length}</div>
              <Button onClick={next} className="px-3 py-1 border-2 border-black bg-white rounded-md">▶</Button>
            </div>

            <Button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-md bg-white px-2 py-1 text-sm border-2 border-black"
              aria-label="Close gallery">
              ✕
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
