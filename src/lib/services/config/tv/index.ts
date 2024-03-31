import type {Tv} from "@/types";

import {API_KEY} from "..";

export const tvIdApiUrl = ({id}: {id: Tv["id"]}) => {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
};

export const tvCastApiUrl = ({id}: {id: Tv["id"]}) => {
  return `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`;
};

export const tvGalleryApiUrl = ({id}: {id: Tv["id"]}) => {
  return `https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`;
};

export const tvRecomendationsApiUrl = ({id}: {id: Tv["id"]}) => {
  return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`;
};
