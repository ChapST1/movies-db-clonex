import type {Person, PersonMovieCredits} from "@/types";

import {fetcher} from "../fetcher";

import {generatePersonMovieCreditsApiUrl} from "./config";

export async function getPersonMovieCredits({id}: {id: Person["id"]}) {
  const apiUrl = generatePersonMovieCreditsApiUrl({id});
  const combinedCredits = await fetcher<PersonMovieCredits>(apiUrl);

  return combinedCredits;
}
