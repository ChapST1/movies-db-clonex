export interface Media {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  media_type: "movie" | "person" | "tv";
  vote_count: number;
  vote_average: number;
}
