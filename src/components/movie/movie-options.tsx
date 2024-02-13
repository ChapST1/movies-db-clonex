import type {Movie} from "@/types";

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
import {generateFullPath} from "@/lib/create-full-path";

import {Tooltip} from "../tooltip";
import {Button} from "../ui/button";

import {MovieButton} from "./movie-button";

export function MovieOptions({overviewInfo}: {overviewInfo: Movie}) {
  const {poster_path, backdrop_path, title, overview, id, release_date} = overviewInfo;
  const posterPath = generateFullPath({
    poster: {
      path: poster_path,
      size: "w154",
    },
  });
  const backdropPath = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  return (
    <footer className="invisible absolute bottom-12 left-[50%] flex w-[max-content]  translate-x-[-50%] items-center justify-center gap-3  opacity-0 duration-200 group-hover:visible group-hover:bottom-14 group-hover:opacity-100 group-hover:*:*:*:*:*:opacity-100  ">
      <Tooltip tooltipContent="Read Overview" tooltipPosition="top">
        <Sheet>
          <SheetTrigger>
            <MovieButton>
              <ReaderIcon />
            </MovieButton>
          </SheetTrigger>
          <SheetContent className="border-accent p-0" side="left">
            <SheetHeader className="m-auto my-6 w-[90%]">
              <picture
                className="relative flex h-52 items-end overflow-hidden rounded-sm border-2 border-accent p-1 "
                style={{
                  backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), 80%, rgba(0, 0, 255, 0.057)), url("${backdropPath}")`,
                  backgroundSize: "cover",
                }}
              >
                <img alt={title} className="w-24 rounded-sm" src={posterPath} />
              </picture>
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription className=" text-pretty text-left">{overview}</SheetDescription>

              <time className="block text-right text-xs text-muted-foreground">{release_date}</time>
              <Link className="m-auto block w-full" href={`/movies/${id}`}>
                <Button className="w-full">view more details</Button>
              </Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Tooltip>

      <Tooltip tooltipContent="Watch triller" tooltipPosition="top">
        <MovieButton>
          <VideoIcon />
        </MovieButton>
      </Tooltip>
    </footer>
  );
}