import type {MovieDetail as MovieDetailType} from "@/types";

import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {MovieDetail} from "@/components/details/movie-details";
import {getMovieById} from "@/lib/services/movie/get-movie-by-id";
import {Error} from "@/components/error";

export default async function MovieDetailPage({
  params: {id},
}: {
  params: {id: MovieDetailType["id"]};
}) {
  const movie = (await getMovieById(id)) as MovieDetailType;

  return (
    <ErrorBoundary errorComponent={Error}>
      <MovieDetail movie={movie} />
    </ErrorBoundary>
  );
}
