import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

export default function AsideContent() {
  return (
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
            <TabsTrigger value="strv-103">Strv 103</TabsTrigger>
            <TabsTrigger value="centurion-action-x">
              Centurion Action X
            </TabsTrigger>
            <TabsTrigger value="tiger-1">Tiger 1</TabsTrigger>
          </TabsList>

          <TabsContent value="strv-103" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-(--font-display)">
                  Strv 103
                </CardTitle>
                <CardDescription className="max-w-3xl text-sm md:text-base">
                  The Strv 103, also known as the S-Tank, was a Swedish main
                  battle tank designed around a very low silhouette and a fixed
                  gun mounting.
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
                      Unlike traditional tanks with a rotating turret, the Strv
                      103 aimed the gun by traversing the entire vehicle and
                      adjusting suspension. That unusual layout made the tank
                      compact, hard to spot, and highly distinctive.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                    <h3 className="text-xl font-semibold">
                      Historical reference
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The tank entered Swedish army service in the 1960s during
                      the Cold War. It reflected a defensive doctrine focused on
                      ambush tactics, survivability, and firing from prepared
                      positions rather than open warfare.
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
                  The Centurion Action X is a British experimental tank design.
                  It originated in 1955 as an upgrade project to improve the
                  standard Centurion&apos;s ballistic protection.
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
                      and ballistic testing stages, it is famous today primarily
                      as a virtual combat vehicle in games like World of Tanks.
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
                  The Panzerkampfwagen VI, commonly known as the Tiger I, was a
                  formidable German heavy tank used in World War II.
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
                      legendary, though it also suffered from reliability issues
                      and engine fires.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-foreground/10 bg-muted/30 p-6">
                    <h3 className="text-xl font-semibold">
                      Historical reference
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Introduced in mid-1942, the Tiger I served on the Eastern
                      and Western Fronts and in North Africa. Its heavy armor
                      and long-range gun made it highly effective in defensive
                      operations against Allied and Soviet armor.
                    </p>
                  </article>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </aside>
  );
}
