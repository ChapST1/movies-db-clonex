import {ReaderIcon, VideoIcon} from "@radix-ui/react-icons";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {Button} from "./ui/button";
import {MediaButton} from "./media-button";

interface MediaOptionsProps {
  overviewInfo?: {
    poster: string;
    backdrop: string;
    title: string;
    info: string;
    id: number;
    date: string;
  };
  options?: {
    isPerson: boolean;
  };
}

export function MediaOptions({overviewInfo, options}: MediaOptionsProps) {
  if (options?.isPerson) {
    return null;
  }

  return (
    <footer className="absolute bottom-12 left-[50%] flex w-[max-content] translate-x-[-50%] items-center  justify-center gap-3 duration-200  group-hover:visible group-hover:opacity-100 md:invisible md:bottom-10 md:opacity-0 md:group-hover:bottom-14  ">
      <Sheet>
        <SheetTrigger>
          <MediaButton>
            <ReaderIcon />
          </MediaButton>
        </SheetTrigger>
        <SheetContent className="border-border p-0" side="right">
          <SheetHeader className="m-auto my-6 w-[90%]">
            <picture
              className="relative flex h-52 items-end overflow-hidden rounded-sm p-1"
              style={{
                backgroundImage: `linear-gradient(to top, hsl(var(--background)), 80%, rgba(0, 0, 255, 0.057)), url("${overviewInfo?.backdrop}")`,
                backgroundSize: "cover",
              }}
            >
              <img
                alt={overviewInfo?.title}
                className="w-24 rounded-sm"
                src={overviewInfo?.poster}
              />
            </picture>
            <SheetTitle className="text-start">{overviewInfo?.title}</SheetTitle>
            <SheetDescription className=" text-pretty text-left">
              {overviewInfo?.info}
            </SheetDescription>

            <time className="block text-right text-xs text-muted-foreground">
              {overviewInfo?.date}
            </time>
            <Link className="m-auto block w-full" href={`/movies/${overviewInfo?.id}`}>
              <Button className="w-full">view more details</Button>
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <MediaButton>
        <VideoIcon />
      </MediaButton>
    </footer>
  );
}
