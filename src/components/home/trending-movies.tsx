import type {DbResponse, MovieTrend} from "@/types";

import Link from "next/link";
import {ChevronRightIcon} from "lucide-react";

import {getTrendingMovies} from "@/lib/services/get-trending-movies";

import {MoviesGrid} from "../movie/movies-grid";
import {Title} from "../ui/title";

export async function TrendingMovies() {
  const movies = (await getTrendingMovies({time: "day"})) as DbResponse<MovieTrend>;

  return (
    <div className="relative">
      <Title className="flex items-center justify-between">
        Trending Movies
        <Link className="flex items-center gap-1 text-base" href="/">
          See All
          <ChevronRightIcon className="size-5" />
        </Link>
      </Title>

      <MoviesGrid movies={movies.results} />
    </div>
  );
}
