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

function Strv103() {
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
    </>
  );
}

function Cax() {
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
    </>
  );
}

function Tiger1() {
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
    </>
  );
}

export { Strv103, Cax, Tiger1 };
