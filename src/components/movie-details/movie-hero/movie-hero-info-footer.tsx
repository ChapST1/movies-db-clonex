import type {MovieDetail} from "@/types";

import {Tooltip} from "@/components/tooltip";
import {Button} from "@/components/ui/button";
import {MediaButton} from "@/components/media-button";
import {MediaBookmark} from "@/components/media-bookmark";

export function MovieHeroInfoFooter({
  adult,
  id,
}: {
  adult: MovieDetail["adult"];
  id: MovieDetail["id"];
}) {
  return (
    <footer className="relative flex flex-col  gap-4 py-2">
      <div className="flex gap-2">
        <Tooltip
          tooltipContent={adult ? "Content +18" : "content for everyone"}
          tooltipPosition="bottom"
        >
          <MediaButton>{adult ? "+18" : ":)"}</MediaButton>
        </Tooltip>

        <MediaBookmark className="block" mediaId={id} />
      </div>
      <Button className="w-full md:w-[max-content]">Watch triller</Button>
    </footer>
  );
}
