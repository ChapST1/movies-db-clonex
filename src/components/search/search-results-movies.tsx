import type {ServiceResponse, Movie} from "@/types";

import {Title} from "../ui/title";
import {MovieItem} from "../movie/movie-item";
import {Badge} from "../ui/badge";
import {MediaGrid} from "../media-grid";

import {SearchPagination} from "./search-pagination";

interface CurrentProps {
  page: string;
  q: string;
  response: ServiceResponse<Movie>;
}

export function SearchResultsMovies({page, q, response}: CurrentProps) {
  const {results, total_results, total_pages} = response;

  return (
    <>
      <Title className="static flex items-center justify-center gap-2 ">
        <Badge>{total_results}</Badge>
        Results for {q}
      </Title>

      <MediaGrid>
        {results.map((item) => {
          return <MovieItem key={item.id} movie={item} />;
        })}
      </MediaGrid>

      <SearchPagination current={Number(page)} totalPages={total_pages} />
    </>
  );
}
