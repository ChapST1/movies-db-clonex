export const API_KEY = process.env.MOVIE_DB_API_KEY;

export const DISCOVER_MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

/**
 * Generate Trending movies api url
 */

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

export const generateMoviesCastApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
};

export const generateMoviesImagesApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
};

export const generateMoviesKeywordsApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`;
};

export const generateMovieRecomendationsApiUrl = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
};
