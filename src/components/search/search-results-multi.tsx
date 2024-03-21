import type {DbResponse, Movie, Person, Tv} from "@/types";

import {Title} from "../ui/title";
import {MovieItem} from "../movie/movie-item";
import {TvItem} from "../tv/tv-item";
import {PersonItem} from "../person/person-item";
import {Badge} from "../ui/badge";
import {MediaGrid} from "../media-grid";

import {SearchPagination} from "./search-pagination";

interface CurrentProps {
  page: string;
  q: string;
  response: DbResponse<Movie | Tv | Person>;
}

export function SearchResultsMulti({response, page, q}: CurrentProps) {
  const {total_results, results, total_pages} = response;

  return (
    <>
      <Title className="static flex items-center justify-center gap-2 ">
        <Badge>{total_results}</Badge>
        Results for {q}
      </Title>
      <MediaGrid>
        {results.map((item) => {
          const {media_type} = item;

          return (
            <>
              {media_type === "movie" && <MovieItem movie={item as Movie} />}

              {media_type === "tv" && <TvItem tv={item as Tv} />}

              {media_type === "person" && <PersonItem person={item as Person} />}
            </>
          );
        })}
      </MediaGrid>

      <SearchPagination current={Number(page)} totalPages={total_pages} />
    </>
  );
}
