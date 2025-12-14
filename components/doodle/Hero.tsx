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
            <div className="hero-image w-fit border-2 border-dashed border-black rounded-md bg-white p-2">
              <div className="sketchfab-embed-wrapper">
                <iframe 
                  title="Tiger 1" 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://sketchfab.com/models/7b4d89d9353249cc8042ff72d6f7977a/embed"
                />
                <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                  <a href="https://sketchfab.com/3d-models/tiger-1-7b4d89d9353249cc8042ff72d6f7977a?utm_medium=embed&utm_campaign=share-popup&utm_content=7b4d89d9353249cc8042ff72d6f7977a" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                    Tiger 1
                  </a>
                  {' by '}
                  <a href="https://sketchfab.com/dirge-?utm_medium=embed&utm_campaign=share-popup&utm_content=7b4d89d9353249cc8042ff72d6f7977a" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                    Dirge
                  </a>
                  {' on '}
                  <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7b4d89d9353249cc8042ff72d6f7977a" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                    Sketchfab
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
