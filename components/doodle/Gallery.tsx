"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: "Tank #1", src: "/images/pack_icon.png" },
    { id: 2, title: "Tank #2", src: "/images/pack_icon.png" },
    { id: 3, title: "Tank #3", src: "/images/pack_icon.png" },
    { id: 4, title: "Tank #4", src: "/images/pack_icon.png" },
    { id: 5, title: "Tank #5", src: "/images/pack_icon.png" },
    { id: 6, title: "Tank #6", src: "/images/pack_icon.png" },
  ];

  return (
    <section id="gallery" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
      
      <Carousel className="w-full">
        <CarouselContent>
          {galleryItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1 lg:basis-1/2">
              <div className="border-2 border-black rounded-md overflow-hidden bg-white hover:shadow-lg transition-shadow h-full">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
