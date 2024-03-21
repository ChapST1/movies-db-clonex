import type {DbResponse, Tv} from "@/types";

import {Title} from "../ui/title";
import {Badge} from "../ui/badge";
import {MediaGrid} from "../media-grid";
import {TvItem} from "../tv/tv-item";

import {SearchPagination} from "./search-pagination";

interface CurrentProps {
  page: string;
  q: string;
  response: DbResponse<Tv>;
}

export function SearchResultsTv({page, q, response}: CurrentProps) {
  const {results, total_results, total_pages} = response;

  return (
    <>
      <Title className="static flex items-center justify-center gap-2 ">
        <Badge>{total_results}</Badge>
        Results for {q}
      </Title>

      <MediaGrid>
        {results.map((item) => {
          return <TvItem key={item.id} tv={item} />;
        })}
      </MediaGrid>

      <SearchPagination current={Number(page)} totalPages={total_pages} />
    </>
  );
}
