import type {MovieDetail} from "@/types";

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
        <MediaButton>{adult ? "+18" : ":)"}</MediaButton>
        <MediaBookmark className="flex items-center justify-center" mediaId={id} />
      </div>
      <Button className="w-full md:w-[max-content]">Watch triller</Button>
    </footer>
  );
}
