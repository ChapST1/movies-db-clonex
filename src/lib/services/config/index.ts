export const API_KEY = process.env.MOVIE_DV_API_KEY;

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
  return `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}&page=${page}`;
};
