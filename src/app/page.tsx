import type {DbResponse, MovieTrend} from "@/types";

import {ChevronRightIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {Suspense} from "react";

import {Title} from "@/components/ui/title";
import {getTrendingMovies} from "@/lib/services/get-trending-movies";
import {MoviesGrid} from "@/components/movie/movies-grid";
import {ShadowEffect} from "@/components/shadow-effect";
import {TrendingMedia} from "@/components/home/trending-media";

export default async function HomePage() {
  const movies = (await getTrendingMovies({time: "day"})) as DbResponse<MovieTrend>;

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <TrendingMedia />
      </Suspense>

      <Title className="flex items-center justify-between">
        Trending Movies
        <Link className="flex items-center gap-1 text-base" href="/">
          See All
          <ChevronRightIcon className="size-5" />
        </Link>
      </Title>

      <MoviesGrid movies={movies.results} />
      <ShadowEffect className="pointer-events-none" />
    </>
  );
}
