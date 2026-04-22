import Image from "next/image";
//import ModeToggle from "@/components/doodle/mode-toggle";
import GithubStarsUsable from "@/components/doodle/github-stars-usable";

export default function Home() {
  return (
    <>
      <header className="topbar wrapper" id="top">
        <div className="repo-info">
          <a href="https://github.com/Dirga36/Doodle-Tank">
            <GithubStarsUsable/>
          </a>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          {/*<ModeToggle />*/}
        </nav>
      </header>

      {/*<!-- Main Content -->*/}
      <main className="wrapper page">
        <section className="hero-card">
          <div className="hero-copy">
            <h1>Doodle Tank</h1>
            <p>Add doodle styled tanks to Minecraft.</p>
            <button className="download-btn">Download</button>
          </div>

          <div className="hero-preview" aria-label="Tank preview">
            <div className="sketchfab-embed-wrapper">
              <iframe
                title="Strv 103"
                allowFullScreen
                src="https://sketchfab.com/models/093856a491ce46f79a65b98f38b92e32/embed?transparent=1"
              ></iframe>
              <p>
                <a
                  href="#tank-overview"
                  rel="nofollow"
                  className="font-bold text-black"
                >
                  Strv 103
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Craftable Tanks</h3>
              <p>Build tanks using custom doodle components.</p>
            </article>
            <article className="feature-card">
              <h3>Unique Stats</h3>
              <p>Each tank has its own power, speed, and defense!</p>
            </article>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <h2>FAQ</h2>

          <details className="faq-item">
            <summary>Which Minecraft version is supported?</summary>
            <p>This addon works with Bedrock 1.21+.</p>
          </details>

          <details className="faq-item">
            <summary>How do I install it?</summary>
            <p>
              Instructions in the
              <a href="https://github.com/Dirga36/Doodle-Tank/wiki/Instalation">
                Wiki
              </a>
            </p>
          </details>

          <details className="faq-item">
            <summary>Is it multiplayer compatible?</summary>
            <p>
              Yes. All players on the server need the same mod version
              installed.
            </p>
          </details>
        </section>
        <a href="#top" className="back-to-top">
          ↑
        </a>
      </main>

      {/*<!-- Aside Content -->*/}
      <aside className="wrapper reference-layout" id="tank-overview">
        <section className="reference-card">
          <p className="reference-eyebrow">Real-world reference</p>
          <h1>Strv 103</h1>
          <p className="reference-lead">
            The Strv 103, also known as the S-Tank, was a Swedish main battle
            tank designed around a very low silhouette and a fixed gun mounting.
          </p>

          <section className="slider" aria-label="Strv 103 image slider">
            <div className="slider-viewport">
              <figure className="slider-track">
                <Image
                  className="slider-image is-active"
                  src="/images/Stridsvagn_103_outside_the_Swedish_Army_Museum_in_September_2015.jpg"
                  alt="Strv 103 parked outside the Swedish Army Museum"
                  width={960}
                  height={540}
                />
                <Image
                  className="slider-image"
                  src="/images/STRV-103_demonstrating_at_P7_Revingehed,_24th_April_2022.jpg"
                  alt="Strv 103 demonstrating mobility at P7 Revingehed"
                  width={960}
                  height={540}
                />
                <Image
                  className="slider-image"
                  src="/images/sw_strv_103c.jpg"
                  alt="Side profile of a Strv 103C tank"
                  width={960}
                  height={540}
                />
              </figure>

              <button
                className="slider-control slider-prev"
                type="button"
                aria-label="Previous image"
              >
                Prev
              </button>
              <button
                className="slider-control slider-next"
                type="button"
                aria-label="Next image"
              >
                Next
              </button>
            </div>

            <div className="slider-dots" aria-label="Image selection">
              <button
                className="slider-dot is-active"
                type="button"
                aria-label="Show image 1"
              ></button>
              <button
                className="slider-dot"
                type="button"
                aria-label="Show image 2"
              ></button>
              <button
                className="slider-dot"
                type="button"
                aria-label="Show image 3"
              ></button>
            </div>
          </section>

          <div className="reference-grid">
            <article className="reference-block">
              <h2>Overview</h2>
              <p>
                Unlike traditional tanks with a rotating turret, the Strv 103
                aimed the gun by traversing the entire vehicle and adjusting
                suspension. That unusual layout made the tank compact, hard to
                spot, and highly distinctive.
              </p>
            </article>

            <article className="reference-block">
              <h2>Historical reference</h2>
              <p>
                The tank entered Swedish army service in the 1960s during the
                Cold War. It reflected a defensive doctrine focused on ambush
                tactics, survivability, and firing from prepared positions
                rather than open maneuver warfare.
              </p>
            </article>
          </div>
        </section>
      </aside>
      <footer className="footer">
        <span className="footer-copy">2025 Doodle Tank | by Dirge/Fu'ad</span>
        <a
          className="footer-link"
          href="https://www.dicoding.com/users/fuad_husnan1yhz/academies"
        >
          <Image
            src="/images/icons/dicodingicon.png"
            width={20}
            height={20}
            alt="dicoding-profile"
          />
        </a>
      </footer>
      <script src="scripts/main.js"></script>
    </>
  );
}
