import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight">Doodle Tank</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A hand-drawn battlefield experience — add doodle-style tanks to
            Minecraft and spice up your worlds with playful, handcrafted
            vehicles.
          </p>

          <div className="mt-6 flex justify-center gap-3 lg:justify-start">
            <Button asChild>
              <a href="#" className="">Download</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl border bg-card p-4 shadow-md">
            <Image
              src="/images/pack_icon.png"
              alt="Doodle Tank"
              width={520}
              height={320}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
