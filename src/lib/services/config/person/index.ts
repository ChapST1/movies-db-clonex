import type {Person} from "@/types";

import {API_KEY} from "..";

export const personIdApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`;
};

export const personMoviesApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
};

export const personGalleryApiUrl = ({id}: {id: Person["id"]}) => {
  return `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
};

export const GENDERS = {
  "0": "No set / not specified",
  "1": "Female",
  "2": "Male",
  "3": "Non-binary",
};
