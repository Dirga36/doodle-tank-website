export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="border-4 p-8 rounded-xl mb-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">Doodle Tank</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Add doodle style tanks to Minecraft.
            </p>

            <div className="mt-4 flex justify-center gap-3 lg:justify-start">
              <a href="https://github.com/Dirga36/Doodle-Tank"
                className="btn inline-block mt-4 px-6 py-3 border-2 border-black text-black bg-white rounded-lg transition duration-200 hover:bg-black hover:text-white">
                Download
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-fit border-2 border-dashed border-black rounded-md bg-white p-2">
              <div className="sketchfab-embed-wrapper">
                <iframe 
                  title="Tiger 1" 
                  allowFullScreen 
                  src="https://sketchfab.com/models/7b4d89d9353249cc8042ff72d6f7977a/embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
