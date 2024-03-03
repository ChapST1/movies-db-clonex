import type {DbResponse, Movie, Person, Tv} from "@/types";

import clsx from "clsx";

import {searchMultiMedia} from "@/lib/services/search-multi-media";

import {Title} from "../ui/title";
import {MovieItem} from "../movie/movie-item";
import {TvItem} from "../tv/tv-item";
import {PersonItem} from "../person/person-item";
import {Badge} from "../ui/badge";

import {SearchPagination} from "./search-pagination";

export async function SearchResults({
  page,
  q,
  tv,
  movie,
  people,
}: {
  page: string;
  q: string;
  tv: string;
  movie: string;
  people: string;
}) {
  const {results, total_pages, total_results} = (await searchMultiMedia({
    query: q,
    page,
  })) as DbResponse<Movie | Tv | Person>;

  const containerStyles = clsx({
    "*:block": !tv && !movie && !people,
  });

  return (
    <section>
      <Title className="static flex items-center justify-center gap-2 ">
        <Badge>{total_results}</Badge>
        Results for {q}
      </Title>
      <div
        className={`grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ${containerStyles}`}
      >
        {results.map((item) => {
          const {media_type} = item;

          return (
            <>
              {media_type === "movie" && (
                <MovieItem isFilter={{enable: Boolean(movie)}} movie={item as Movie} />
              )}

              {media_type === "tv" && <TvItem isFilter={{enable: Boolean(tv)}} tv={item as Tv} />}

              {media_type === "person" && (
                <PersonItem isFilter={{enable: Boolean(people)}} person={item as Person} />
              )}
            </>
          );
        })}
      </div>

      <SearchPagination current={Number(page)} totalPages={total_pages} />
    </section>
  );
}
