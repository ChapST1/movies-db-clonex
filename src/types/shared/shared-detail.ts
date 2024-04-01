import type {Genre} from "./shared-genre";
import type {ProductionCountry} from "./shared-production-country";
import type {SpokenLanguage} from "./shared-spoken-language";

export interface Detail {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  spoken_languages: SpokenLanguage[];
  overview: string;
  production_companies: string[];
  production_countries: ProductionCountry[];
  original_language: string;
}
