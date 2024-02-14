import type {MovieDetail} from "@/types";

import {MovieBookmark} from "@/components/movie/movie-bookmark";
import {MovieButton} from "@/components/movie/movie-button";
import {Tooltip} from "@/components/tooltip";
import {Button} from "@/components/ui/button";

export function MovieHeroInfoFooter({adult}: {adult: MovieDetail["adult"]}) {
  return (
    <footer className="relative flex flex-col  gap-4 py-2">
      <div className="flex gap-2">
        <Tooltip
          tooltipContent={adult ? "Content +18" : "content for everyone"}
          tooltipPosition="bottom"
        >
          <MovieButton>{adult ? "+18" : ":)"}</MovieButton>
        </Tooltip>

        <MovieBookmark className="block" />
      </div>
      <Button className="w-full md:w-[max-content]">Watch triller</Button>
    </footer>
  );
}
