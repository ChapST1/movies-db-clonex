import type {MovieTrend, ServiceResponse} from "@/types";

import Link from "next/link";
import {ChevronRightIcon} from "lucide-react";

import {Title} from "@/components/ui/title";
import {MediaGrid} from "@/components/media-grid";
import {MovieItem} from "@/components/movie/movie-item";
import {getTrendingMovies} from "@/lib/services/movie/get-trending-movies";

export async function TrendingMovies() {
  const {results} = (await getTrendingMovies({
    time: "day",
    page: 1,
  })) as ServiceResponse<MovieTrend>;

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
