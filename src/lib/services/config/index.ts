export const API_KEY = process.env.MOVIE_DB_API_KEY;

export const CLIENT_API_KEY = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;

export const generateGetAllMediaTrending = ({page = 1}: {page?: number}) => {
  return `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`;
};
