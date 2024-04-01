"use client";

import type {Movie, Tv, WithOptional} from "@/types";

import {useRef} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

import {MediaButton} from "@/components/media-button";

import {CarouselMediaItem} from "./carousel-media-item";

export function CarouselMedia({data}: {data: WithOptional<Movie, "release_date" | "title">[]}) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    if (sliderRef.current) {
      const translate = (sliderRef.current.firstElementChild?.clientWidth ?? 0) / 2;
      const value = translate + translate * 2;

      sliderRef.current.scrollLeft += value;
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      const translate = (sliderRef.current.firstElementChild?.clientWidth ?? 0) / 2;
      const value = translate + translate * 2;

      sliderRef.current.scrollLeft -= value;
    }
  };

  return (
    <div className="relative mt-4 overflow-hidden rounded-xl">
      <div
        ref={sliderRef}
        className="relative flex h-full w-full snap-x snap-mandatory gap-2 overflow-y-auto *:h-full *:snap-center"
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

      <div aria-label="carousel-controls" className="flex items-center  justify-end gap-2">
        <MediaButton onClick={prev}>
          <ArrowLeft />
        </MediaButton>

        <MediaButton onClick={next}>
          <ArrowRight />
        </MediaButton>
      </div>
    </div>
  );
}
