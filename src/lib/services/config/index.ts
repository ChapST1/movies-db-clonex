import type {Person} from "@/types";

export const API_KEY = process.env.MOVIE_DB_API_KEY;

export const CLIENT_API_KEY = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;

export const DISCOVER_MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

export interface GenerateTrendingMoviesApiUrlProps {
  time?: "day" | "week";
  page?: number;
}

export const GENERATE_TRENDING_MOVIES_API_URL = ({
  time,
  page,
}: GenerateTrendingMoviesApiUrlProps) => {
  // return `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}&page=${page}&language=es-US`;
  return `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}&page=${page}`;
};

export const generateMovieByIdApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
};

export const generateTvByIdApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
};

export const generateMoviesCastApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
};

export const generateTvCastApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`;
};

export const generateMoviesImagesApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
};

export const generateTvImagesApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`;
};

export const generateMoviesKeywordsApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`;
};

export const generateMovieRecomendationsApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
};

export const generateTvRecomendationsApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`;
};

export const generateSearchTvApiUrl = ({query}: {query: string}) => {
  return `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${CLIENT_API_KEY}`;
};

export const generateSearchPersonApiUrl = ({query}: {query: string}) => {
  return `https://api.themoviedb.org/3/search/person?query=${query}&api_key=${CLIENT_API_KEY}`;
};

export const generateSearchSearchApiUrl = ({query}: {query: string}) => {
  return `https://api.themoviedb.org/3/search/person?query=${query}&api_key=${CLIENT_API_KEY}`;
};

export const generateSearchMovieApiUrl = ({query}: {query: string}) => {
  return `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${CLIENT_API_KEY}`;
};

export const generateSearchMultiMediaApiUrl = ({query, page}: {query: string; page: string}) => {
  return `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=${CLIENT_API_KEY}`;
};

export const generatePersonByIdApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`;
};

export const generatePersonMovieCreditsApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
};

export const generatePersonImagesApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
};

export const generateGetAllMediaTrending = ({page = 1}: {page?: number}) => {
  return `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`;
};

/**
 *
 * CATEGORIES
 *
 */
export const generateGetMovieCategoriesApiUrl = ({language = "en"}: {language: string}) => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${language}`;
};

export const GENDERS = {
  "0": "No set / not specified",
  "1": "Female",
  "2": "Male",
  "3": "Non-binary",
};
