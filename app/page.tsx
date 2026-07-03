import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { MoveUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GitHubStarsButton } from "@/components/animate-ui/components/buttons/github-stars";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative min-h-screen mt-10">
      <header id="top">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="https://github.com/Dirga36/Doodle-Tank"
            aria-label="Doodle Tank on GitHub"
            className="inline-flex h-10 items-center justify-center "
          >
            <GitHubStarsButton
              username="Dirga36"
              repo="Doodle-Tank"
              variant={"ghost"}
              className="border border-black"
            />
          </a>
          <nav className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
            <a
              className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              href="#features"
            >
              Features
            </a>
            <a
              className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              href="#faq"
            >
              FAQ
            </a>
            <div>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/*<!-- Main Content -->*/}
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
            <article className="rounded-2xl border border-foreground/10 bg-card/60 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Craftable Tanks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Build tanks using custom doodle components.
              </p>
            </article>
            <article className="rounded-2xl border border-foreground/10 bg-card/60 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Unique Stats</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Each tank has its own power, speed, and defense!
              </p>
            </article>
          </div>
          <div className="mx-20">
            <h3 className="text-center text-xl font-semibold mb-4">Model Showcase</h3>
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

      {/*<!-- Aside Content -->*/}
      <aside
        id="tank-overview"
        className="border-t border-foreground/10 bg-muted/40"
      >
        <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Real-world reference
            </p>
            <h2 className="text-4xl font-(--font-display) tracking-wide md:text-5xl">
              Tank Profiles
            </h2>
            <p className="max-w-3xl text-base text-muted-foreground">
              Explore historical references for three iconic vehicles and their
              design background.
            </p>
          </div>

          <Tabs defaultValue="strv-103" className="w-full">
            <TabsList className="bg-gray-200">
              <TabsTrigger value="strv-103">
                Strv 103
              </TabsTrigger>
              <TabsTrigger value="centurion-action-x">
                Centurion Action X
              </TabsTrigger>
              <TabsTrigger value="tiger-1">
                Tiger 1
              </TabsTrigger>
            </TabsList>

            <TabsContent value="strv-103" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-(--font-display)">
                    Strv 103
                  </CardTitle>
                  <CardDescription className="max-w-3xl text-sm md:text-base">
                    The Strv 103, also known as the S-Tank, was a Swedish main
                    battle tank designed around a very low silhouette and a
                    fixed gun mounting.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Carousel className="relative">
                    <CarouselContent>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/a/Stridsvagn_103_outside_the_Swedish_Army_Museum_in_September_2015.jpg"
                          alt="Strv 103 parked outside the Swedish Army Museum"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/a/STRV-103_demonstrating_at_P7_Revingehed,_24th_April_2022.jpg"
                          alt="Strv 103 demonstrating mobility at P7 Revingehed"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/a/sw_strv_103c.jpg"
                          alt="Side profile of a Strv 103C tank"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>

                  <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">Overview</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Unlike traditional tanks with a rotating turret, the
                        Strv 103 aimed the gun by traversing the entire vehicle
                        and adjusting suspension. That unusual layout made the
                        tank compact, hard to spot, and highly distinctive.
                      </p>
                    </article>

                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">
                        Historical reference
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        The tank entered Swedish army service in the 1960s
                        during the Cold War. It reflected a defensive doctrine
                        focused on ambush tactics, survivability, and firing
                        from prepared positions rather than open warfare.
                      </p>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="centurion-action-x" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-(--font-display)">
                    Centurion Action X
                  </CardTitle>
                  <CardDescription className="max-w-3xl text-sm md:text-base">
                    The Centurion Action X is a British experimental tank
                    design. It originated in 1955 as an upgrade project to
                    improve the standard Centurion&apos;s ballistic protection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Carousel className="relative">
                    <CarouselContent>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/b/Centurion+Action+X.jpg"
                          alt="Reference tank image for Centurion Action X profile"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/b/2899932_original.jpg"
                          alt="Reference armored vehicle movement image"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/b/2893846_original.jpg"
                          alt="Reference side profile image for tank details"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>

                  <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">Overview</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Because the original vehicle never passed the prototype
                        and ballistic testing stages, it is famous today
                        primarily as a virtual combat vehicle in games like
                        World of Tanks.
                      </p>
                    </article>

                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">
                        Historical reference
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Initiated around 1955, the project sought to solve weak
                        points of the classic Centurion turret, especially the
                        vulnerable gun mantlet. A mantletless, heavily angled
                        turret front increased shell deflection.
                      </p>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tiger-1" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-(--font-display)">
                    Tiger 1
                  </CardTitle>
                  <CardDescription className="max-w-3xl text-sm md:text-base">
                    The Panzerkampfwagen VI, commonly known as the Tiger I, was
                    a formidable German heavy tank used in World War II.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Carousel className="relative">
                    <CarouselContent>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/c/Untitled-528-×-290-px-510-×-393-px-1.jpg"
                          alt="Reference heavy tank museum image"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/c/Bundesarchiv_Bild_101I-299-1805-16,_Nordfrankreich,_Panzer_VI_(Tiger_I).2.jpg"
                          alt="Reference heavy tank demonstration image"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <Image
                          className="h-80 w-full rounded-2xl object-cover shadow-sm md:h-105"
                          src="/images/footage/c/bundesarchiv-bild-101i-299-1805-12-scheck-cc-by-sa-3-0-768x492.jpg"
                          alt="Reference side profile armored vehicle image"
                          width={960}
                          height={540}
                        />
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>

                  <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">Overview</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tiger I is arguably the most famous tank of the Second
                        World War. Its armor, firepower, and size made it
                        legendary, though it also suffered from reliability
                        issues and engine fires.
                      </p>
                    </article>

                    <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                      <h3 className="text-xl font-semibold">
                        Historical reference
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Introduced in mid-1942, the Tiger I served on the
                        Eastern and Western Fronts and in North Africa. Its
                        heavy armor and long-range gun made it highly effective
                        in defensive operations against Allied and Soviet armor.
                      </p>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </aside>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-20 bg-black dark:bg-white right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 text-foreground shadow-lg backdrop-blur transition hover:-translate-y-0.5"
      >
        <MoveUp className="text-white dark:text-black h-5 w-5" />
      </a>

      <footer className="border-t border-foreground/10 mt-5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-sm text-muted-foreground">
          <span>2025 Doodle Tank | by Dirge/Fuad</span>
          <a
            className="inline-flex items-center justify-center"
            href="https://www.dicoding.com/users/fuad_husnan1yhz/academies"
          >
            <Image
              src="/images/icons/dicodingicon.png"
              width={20}
              height={20}
              alt="dicoding-profile"
              className="h-5 w-5"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
