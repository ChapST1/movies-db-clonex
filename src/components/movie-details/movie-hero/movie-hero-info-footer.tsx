import type {MovieDetail} from "@/types";

import {MovieBookmark} from "@/components/movie/movie-bookmark";
import {Tooltip} from "@/components/tooltip";
import {Button} from "@/components/ui/button";
import {MediaButton} from "@/components/media-button";

export function MovieHeroInfoFooter({adult}: {adult: MovieDetail["adult"]}) {
  return (
    <footer className="relative flex flex-col  gap-4 py-2">
      <div className="flex gap-2">
        <Tooltip
          tooltipContent={adult ? "Content +18" : "content for everyone"}
          tooltipPosition="bottom"
        >
          <MediaButton>{adult ? "+18" : ":)"}</MediaButton>
        </Tooltip>

        <MovieBookmark className="block" />
      </div>
      <Button className="w-full md:w-[max-content]">Watch triller</Button>
    </footer>
  );
}
