import {ReaderIcon} from "@radix-ui/react-icons";
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
import {MediaBookmark} from "./media-bookmark";

interface MediaOptionsProps {
  overviewInfo?: {
    poster: string;
    backdrop: string;
    title: string;
    info: string;
    id: number;
    date: string;
  };
}

export function MediaOptions({overviewInfo}: MediaOptionsProps) {
  return (
    <footer className="absolute right-1 top-1 flex h-[max-content] w-[max-content] -translate-y-7 items-center justify-center gap-1 p-1 opacity-0 duration-200 group-hover:visible group-hover:-translate-y-0 group-hover:opacity-100 md:invisible md:group-hover:bottom-14  ">
      <Sheet>
        <SheetTrigger>
          <MediaButton className="size-9 md:size-10">
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
      <MediaBookmark className="size-9 md:size-10" mediaId={Number(overviewInfo?.id)} />
    </footer>
  );
}
