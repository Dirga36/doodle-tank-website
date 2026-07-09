import { ChartRadar } from "../chart-radar";
import { CarouselItem } from "../ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type TankStat = {
  status: string;
  value: number;
};

type ShowcaseItemProps = {
  stats: TankStat[];
};

function Strv103({ stats }: ShowcaseItemProps) {
  return (
    <>
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
          <DialogContent className="px-15 min-w-max flex flex-col justify-center">
            <ScrollArea className="h-[300px] pr-8">
              <DialogHeader>
                <DialogTitle>STRV 103</DialogTitle>
                <DialogDescription>
                  <iframe
                    className="mb-5 aspect-video w-full rounded-2xl border border-foreground/10"
                    title="Strv 103"
                    allowFullScreen
                    src="https://sketchfab.com/models/093856a491ce46f79a65b98f38b92e32/embed"
                  ></iframe>
                </DialogDescription>
              </DialogHeader>
              <ChartRadar data={stats} />
              <ScrollBar />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CarouselItem>
    </>
  );
}

function Cax({ stats }: ShowcaseItemProps) {
  return (
    <>
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
          <DialogContent className="px-15 min-w-max flex flex-col justify-center">
            <ScrollArea className="h-[300px] pr-8">
              <DialogHeader>
                <DialogTitle>Centurion Action X</DialogTitle>
                <DialogDescription>
                  <iframe
                    className="mb-5 aspect-video w-full rounded-2xl border border-foreground/10"
                    title="Strv 103"
                    allowFullScreen
                    src="https://sketchfab.com/models/497a1b6ac4944301b8333053f6aa2ff3/embed"
                  ></iframe>
                </DialogDescription>
              </DialogHeader>
              <ChartRadar data={stats} />
              <ScrollBar />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CarouselItem>
    </>
  );
}

function Tiger1({ stats }: ShowcaseItemProps) {
  return (
    <>
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
          <DialogContent className="px-15 min-w-max flex flex-col justify-center">
            <ScrollArea className="h-[300px] pr-8">
              <DialogHeader>
                <DialogTitle>STRV 103</DialogTitle>
                <DialogDescription>
                  <iframe
                    className="mb-5 aspect-video w-full rounded-2xl border border-foreground/10"
                    title="Strv 103"
                    allowFullScreen
                    src="https://sketchfab.com/models/7b4d89d9353249cc8042ff72d6f7977a/embed"
                  ></iframe>
                </DialogDescription>
              </DialogHeader>
              <ChartRadar data={stats} />
              <ScrollBar />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CarouselItem>
    </>
  );
}

export { Strv103, Cax, Tiger1 };
