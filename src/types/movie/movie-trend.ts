import type {Movie} from "./movie";

export interface MovieTrend extends Movie {
  media_type: "movie" | "person" | "tv";
}
