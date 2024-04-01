import type {Movie} from "../movie/movie";

export interface PersonMovieCredits {
  cast: Movie[];
  crew: Movie[];

  id: number;
}
