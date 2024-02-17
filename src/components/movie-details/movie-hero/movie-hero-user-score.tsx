import type {MovieDetail} from "@/types";

import {Tooltip} from "@/components/tooltip";

export function MovieHeroUserScore({vote_average}: {vote_average: MovieDetail["vote_average"]}) {
  return (
    <Tooltip className="my-4 w-[max-content]" tooltipContent="User Score" tooltipPosition="bottom">
      <div className="flex size-10 select-none items-center justify-center rounded-xl border-2 border-border bg-background text-xs">
        <p>{Math.round(vote_average * 10)}%</p>
      </div>
    </Tooltip>
  );
}
