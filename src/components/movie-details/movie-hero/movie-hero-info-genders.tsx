import type {MovieDetail} from "@/types";

import {Badge} from "@/components/ui/badge";

export function MovieHeroInfoGenders({genres}: {genres: MovieDetail["genres"]}) {
  return (
    <div className="flex gap-3 py-1">
      {genres.map(({id, name}) => (
        <Badge key={id}>{name}</Badge>
      ))}
    </div>
  );
}
