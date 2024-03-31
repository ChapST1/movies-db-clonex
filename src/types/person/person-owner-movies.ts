import type {Movie} from "../movie/movie";
import type {Tv} from "../tv/tv";

export interface PersonMovieCredits {
  cast: Movie[] | Tv[];
  crew: Movie[] | Tv[];

  id: number;
}
