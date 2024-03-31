import type {Movie} from "@/types";

import {API_KEY} from "..";

export const moviestrendingApiUrl = ({time, page}: {time?: "day" | "week"; page?: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}&page=${page}`;
};

export const movieIdApiUrl = ({id}: {id: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
};

export const movieCastApiUrl = ({id}: {id: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
};

export const movieGalleryApiUrl = ({id}: {id: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
};

export const movieKeywordsApiUrl = ({id}: {id: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`;
};

export const movieRecomendationsApiUrl = ({id}: {id: Movie["id"]}) => {
  return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
};

export const movieCategoriesApiUrl = ({language = "en"}: {language: string}) => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${language}`;
};

export const movieDiscoverApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
