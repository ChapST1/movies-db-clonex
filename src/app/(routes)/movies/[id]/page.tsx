import type {MovieDetail as MovieDetailType} from "@/types";

import {MovieDetail} from "@/components/movie-details";
import {getMovieById} from "@/lib/services/movie/get-movie-by-id";

export default async function MovieDetailPage({
  params: {id},
}: {
  params: {id: MovieDetailType["id"]};
}) {
  const movie = (await getMovieById(id)) as MovieDetailType;

  return <MovieDetail movie={movie} />;
}
