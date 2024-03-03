import type {DbResponse, Movie, Person, Tv} from "@/types";

import {getAllTrendingMedia} from "@/lib/services/get-all-trending-media";

import {TrendingMediaItem} from "./trending-media-item";

export async function TrendingMedia() {
  const {results} = (await getAllTrendingMedia()) as DbResponse<Movie | Tv | Person>;

  return (
    <div className="mb-8 flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll *:snap-center">
      {results.map((item) => {
        const {media_type} = item;

        return (
          <>
            {media_type === "movie" && (
              <TrendingMediaItem key={item.id} media={item as Movie & Tv} />
            )}
            {media_type === "tv" && <TrendingMediaItem key={item.id} media={item as Movie & Tv} />}
            {media_type === "person" && null}
          </>
        );
      })}
    </div>
  );
}
