import type {DbResponse, MovieTrend} from "@/types";

import Link from "next/link";
import {ChevronRightIcon} from "lucide-react";

import {getTrendingMovies} from "@/lib/services/get-trending-movies";
import {Title} from "@/components/ui/title";
import {MediaGrid} from "@/components/media-grid";
import {MovieItem} from "@/components/movie/movie-item";

export async function TrendingMovies() {
  const {results} = (await getTrendingMovies({time: "day"})) as DbResponse<MovieTrend>;

  return (
    <div className="relative w-full">
      <Title className="flex items-center justify-between">
        Trending Movies
        <Link className="flex items-center gap-1 text-base" href="/">
          See All
          <ChevronRightIcon className="size-5" />
        </Link>
      </Title>
      <MediaGrid>
        {results.map((item) => {
          return <MovieItem key={item.id} movie={item} />;
        })}
      </MediaGrid>
    </div>
  );
}
