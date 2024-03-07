import type {Movie} from "@/types";

import {twMerge} from "tailwind-merge";

import {MovieItem} from "./movie-item";

interface MovieGridProps extends React.ComponentProps<"section"> {
  movies: Movie[] | undefined;
}

export function MoviesGrid({movies, className, ...props}: MovieGridProps) {
  return (
    <section
      className={twMerge(
        "grid grid-cols-3 gap-2 md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] md:gap-4",
        className,
      )}
      {...props}
    >
      {movies?.map((item) => {
        const {id} = item;

        return <MovieItem key={id} movie={item} />;
      })}
    </section>
  );
}
