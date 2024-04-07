import type {Movie, TvKeywords} from "@/types";

import {Badge} from "@/components/ui/badge";
import {getTvKeywords} from "@/lib/services/tv/get-tv-keywords";

export async function TvSidebarKeywords({id}: {id: Movie["id"]}) {
  const {results} = (await getTvKeywords(id)) as TvKeywords;

  return (
    <div>
      <h2 className="font-bold">Keywords</h2>
      <aside className="flex flex-wrap justify-start gap-2 py-2">
        {results.map(({id, name}) => (
          <Badge key={id} variant="secondary">
            {name}
          </Badge>
        ))}
      </aside>
    </div>
  );
}
