import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Star } from "lucide-react";
//import GithubStarsUsable from "@/components/doodle/github-stars-usable";

export default function Home() {
  return (
    <>
      <header id="top">
        <div>
          <a href="https://github.com/Dirga36/Doodle-Tank">
            {/*<GithubStarsUsable />*/}
            <Star/>
          </a>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <ModeToggle />
        </nav>
      </header>

      {/*<!-- Main Content -->*/}
      <main>
        <section>
          <div>
            <h1>Doodle Tank</h1>
            <p>Add doodle styled tanks to Minecraft.</p>
            <button>Download</button>
          </div>

          <div>
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

        <section id="features">
          <h2>Features</h2>
          <div>
            <article>
              <h3>Craftable Tanks</h3>
              <p>Build tanks using custom doodle components.</p>
            </article>
            <article>
              <h3>Unique Stats</h3>
              <p>Each tank has its own power, speed, and defense!</p>
            </article>
          </div>
        </section>

        <section id="faq">
          <h2>FAQ</h2>

          <details>
            <summary>Which Minecraft version is supported?</summary>
            <p>This addon works with Bedrock 1.21+.</p>
          </details>

          <details>
            <summary>How do I install it?</summary>
            <p>
              Instructions in the
              <a href="https://github.com/Dirga36/Doodle-Tank/wiki/Instalation">
                Wiki
              </a>
            </p>
          </details>

          <details>
            <summary>Is it multiplayer compatible?</summary>
            <p>
              Yes. All players on the server need the same mod version
              installed.
            </p>
          </details>
        </section>
        <a href="#top">
          ↑
        </a>
      </main>

      {/*<!-- Aside Content -->*/}
      <aside id="tank-overview">
        <section>
          <p>Real-world reference</p>
          <h1>Strv 103</h1>
          <p>
            The Strv 103, also known as the S-Tank, was a Swedish main battle
            tank designed around a very low silhouette and a fixed gun mounting.
          </p>

          <section>
          </section>

          <div>
            <article>
              <h2>Overview</h2>
              <p>
                Unlike traditional tanks with a rotating turret, the Strv 103
                aimed the gun by traversing the entire vehicle and adjusting
                suspension. That unusual layout made the tank compact, hard to
                spot, and highly distinctive.
              </p>
            </article>

            <article>
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
      <footer>
        <span>2025 Doodle Tank | by Dirge/Fu'ad</span>
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
