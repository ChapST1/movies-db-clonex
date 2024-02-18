import type {Movie} from "@/types";

import {MovieItem} from "./movie-item";

export function MoviesGrid({movies}: {movies: Movie[] | undefined}) {
  return (
    <section
      className="grid grid-cols-2
      gap-4 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
    >
      {movies?.map((item) => {
        const {id} = item;

        return <MovieItem key={id} movie={item} />;
      })}
    </section>
  );
}
