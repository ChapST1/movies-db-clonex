/**
 * https://github.com/microsoft/TypeScript/issues/25760#issuecomment-405931434
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Movies Response
 */

import type {GENDERS} from "@/lib/services/config";

export interface DbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: "movie" | "person" | "tv";
}

export interface MovieTrend extends Movie {
  media_type: "movie" | "person" | "tv";
}

/**
 * Movie detail
 * ---------------------------------
 */

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

/**
 * Movie cast
 */
export interface MovieCast {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Lighting = "Lighting",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

/**
 * Movie images
 */
export interface MovieImages {
  backdrops: ImageInfo[];
  id: number;
  logos: ImageInfo[];
  posters: ImageInfo[];
}

export interface ImageInfo {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/**
 * Movie Keywords
 */

export interface MovieKeywords {
  id: number;
  keywords: Keyword[];
}

export interface Keyword {
  id: number;
  name: string;
}

/**
 * Movie Recomendations
 */

export interface Recomendations {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie" | "person" | "tv";
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * Person Response
 */
export interface Person {
  adult: boolean;
  also_known_as: string[] | undefined;
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: keyof typeof GENDERS;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  media_type: "movie" | "person" | "tv";
}

/**
 * Percon movie Credits
 */

export interface PersonMovieCredits {
  cast: Movie[];
  crew: Movie[];
  id: number;
}

/**
 * Person Images
 */

export interface PersonProfiles {
  id: number;
  profiles: Profile[];
}

export interface Profile {
  aspect_ratio: number;
  height: number;
  iso_639_1: null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export enum MediaType {
  Movie = "movie",
  Person = "person",
  Tv = "tv",
}

export interface Tv {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "movie" | "person" | "tv";
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

/**
 * Search filters
 */

export type SearchFilters = "movie" | "tv" | "people";

/**
 *
 * CATEGORIES
 *
 */

export interface MovieCategories {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

// search preference

export type SearchPreference = "all" | "movie" | "tv" | "person";
