"use client";

import type {Movie, Tv, WithOptional} from "@/types";

import {useRef} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

import {MediaButton} from "../media-button";

import {CarouselMediaItem} from "./carousel-media-item";

export function CarouselMedia({data}: {data: WithOptional<Movie, "release_date" | "title">[]}) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 1000;
    }
  };
  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 1000;
    }
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="mb-8 flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll *:snap-center"
      >
        {data.map((item) => {
          const {media_type} = item;

          return (
            <>
              {media_type === "movie" && (
                <CarouselMediaItem key={item.id} media={item as Movie & Tv} />
              )}
              {media_type === "tv" && (
                <CarouselMediaItem key={item.id} media={item as Movie & Tv} />
              )}
              {media_type === "person" && null}
            </>
          );
        })}
      </div>

      <div aria-label="carousel-controls" className="flex items-center justify-center gap-2">
        <MediaButton onClick={prev}>
          <ArrowLeft />
        </MediaButton>

        <MediaButton onClick={next}>
          <ArrowRight />
        </MediaButton>
      </div>
    </>
  );
}
