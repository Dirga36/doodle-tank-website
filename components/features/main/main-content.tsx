import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function MainContent() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-24 px-6 py-8">
      <section className="grid p-5 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] rounded-3xl border-2 border-solid">
        <div className="space-y-6">
          <h1 className="text-5xl font-(--font-display) leading-[0.9] tracking-tight md:text-7xl">
            Doodle Tank
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Add doodle styled tanks to Minecraft.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-28px_rgba(0,0,0,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            type="button"
          >
            Download
          </button>
        </div>

        <div>
          <div className="space-y-3">
            <iframe
              className="aspect-video w-full rounded-2xl border border-foreground/10"
              title="Strv 103"
              allowFullScreen
              src="https://sketchfab.com/models/093856a491ce46f79a65b98f38b92e32/embed?"
            ></iframe>
            <p className="text-sm font-semibold text-muted-foreground">
              <a
                href="#tank-overview"
                rel="nofollow"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Strv 103
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="space-y-8">
        <h2 className="text-3xl font-(--font-display) tracking-wide md:text-4xl">
          Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Craftable Tanks
              </CardTitle>
              <CardDescription>
                <p className="text-sm text-muted-foreground">
                  Build tanks using custom doodle components.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Unique Stats
              </CardTitle>
              <CardDescription>
                <p className="text-sm text-muted-foreground">
                  Each tank has its own power, speed, and defense!
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-20">
          <h3 className="text-center text-xl font-semibold mb-4">
            Model Showcase
          </h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <Dialog>
                  <DialogTrigger>
                    <Image
                      className="slider-image"
                      src="/images/entities/strv_103.png"
                      alt="Strv 103 model footage"
                      width={960}
                      height={540}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="space-y-5">
                      <DialogTitle>STRV 103</DialogTitle>
                      <DialogDescription>
                        <iframe
                          className="aspect-video w-full rounded-2xl border border-foreground/10"
                          title="Strv 103"
                          allowFullScreen
                          src="https://sketchfab.com/models/093856a491ce46f79a65b98f38b92e32/embed"
                        ></iframe>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
              <CarouselItem>
                <Dialog>
                  <DialogTrigger>
                    <Image
                      className="slider-image"
                      src="/images/entities/centurion_action_x.png"
                      alt="Centurion Action X model footage"
                      width={960}
                      height={540}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="space-y-5">
                      <DialogTitle>Centurion Action X</DialogTitle>
                      <DialogDescription>
                        <iframe
                          className="aspect-video w-full rounded-2xl border border-foreground/10"
                          title="Strv 103"
                          allowFullScreen
                          src="https://sketchfab.com/models/497a1b6ac4944301b8333053f6aa2ff3/embed"
                        ></iframe>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>

              <CarouselItem>
                <Dialog>
                  <DialogTrigger>
                    <Image
                      className="slider-image"
                      src="/images/entities/tiger_1.png"
                      alt="Tiger 1 model footage"
                      width={960}
                      height={540}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="space-y-5">
                      <DialogTitle>Tiger 1</DialogTitle>
                      <DialogDescription>
                        <iframe
                          className="aspect-video w-full rounded-2xl border border-foreground/10"
                          title="Strv 103"
                          allowFullScreen
                          src="https://sketchfab.com/models/7b4d89d9353249cc8042ff72d6f7977a/embed"
                        ></iframe>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="faq" className="space-y-6">
        <h2 className="text-3xl font-(--font-display) tracking-wide md:text-4xl">
          FAQ
        </h2>

        <div className="grid gap-4">
          <details className="group rounded-2xl border border-foreground/10 bg-card/60 p-5 shadow-sm">
            <summary className="cursor-pointer text-base font-semibold">
              Which Minecraft version is supported?
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              This addon works with Bedrock 1.21+.
            </p>
          </details>

          <details className="group rounded-2xl border border-foreground/10 bg-card/60 p-5 shadow-sm">
            <summary className="cursor-pointer text-base font-semibold">
              How do I install it?
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Instructions in the{" "}
              <a
                href="https://github.com/Dirga36/Doodle-Tank/wiki/Instalation"
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                Wiki
              </a>
            </p>
          </details>

          <details className="group rounded-2xl border border-foreground/10 bg-card/60 p-5 shadow-sm">
            <summary className="cursor-pointer text-base font-semibold">
              Is it multiplayer compatible?
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Yes. All players on the server need the same mod version
              installed.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
