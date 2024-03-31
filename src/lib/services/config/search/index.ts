import {CLIENT_API_KEY} from "..";

export const searchTvApiUrl = ({query, page = 1}: {query: string; page: number}) => {
  return `https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}&api_key=${CLIENT_API_KEY}`;
};

export const searchPersonApiUrl = ({query, page = 1}: {query: string; page: number}) => {
  return `https://api.themoviedb.org/3/search/person?query=${query}&page=${page}&api_key=${CLIENT_API_KEY}`;
};

// export const searchSearchApiUrl = ({query}: {query: string}) => {
//   return `https://api.themoviedb.org/3/person?query=${query}&api_key=${CLIENT_API_KEY}`;
// };

export const searchMovieApiUrl = ({query, page = 1}: {query: string; page: number}) => {
  return `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${CLIENT_API_KEY}`;
};

export const searchMultiMediaApiUrl = ({query, page = 1}: {query: string; page: number}) => {
  return `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=${CLIENT_API_KEY}`;
};
