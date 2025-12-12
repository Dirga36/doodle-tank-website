import Image from "next/image";

export default function Hero() {
  return (
    <section className="Home container mx-auto px-6 py-12">
      <div className="hero border-4 border-black p-8 rounded-xl mb-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="title title-stroke text-5xl font-extrabold leading-tight text-white">Doodle Tank</h1>
            <p className="subtitle mt-4 text-lg text-muted-foreground max-w-xl">
              Add doodle style tanks to Minecraft and spice up your worlds with goofy, doodle battle tank.
            </p>

            <div className="mt-4 flex justify-center gap-3 lg:justify-start">
              <a href="https://github.com/Dirga36/Doodle-Tank"
                className="btn inline-block mt-4 px-6 py-3 border-2 border-black text-black bg-white rounded-lg transition duration-200 hover:bg-black hover:text-white">
                Download
              </a>
              <a href="#gallery"
                className="btn inline-block mt-4 px-6 py-3 border-2 border-black text-black bg-white rounded-lg transition duration-200 hover:bg-black hover:text-white">
                View Gallery
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="hero-image w-48 border-2 border-dashed border-black rounded-md bg-white p-2">
              <Image
                src="/images/pack_icon.png"
                alt="Doodle Tank"
                width={500}
                height={300}
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
