import type {Movie, MovieKeywords} from "@/types";

import {Badge} from "@/components/ui/badge";
import {getMovieKeywords} from "@/lib/services/get-movie-keywords";

export async function MovieSidebarKeywords({id}: {id: Movie["id"]}) {
  const {keywords} = (await getMovieKeywords(id)) as MovieKeywords;

  return (
    <div>
      <h2 className="font-bold">Keywords</h2>
      <aside className="flex flex-wrap justify-start gap-2 py-2">
        {keywords.map(({id, name}) => (
          <Badge key={id} variant="secondary">
            {name}
          </Badge>
        ))}
      </aside>
    </div>
  );
}
