import type {Person, PersonMovieCredits} from "@/types";

import {fetcher} from "../../fetcher";
import {personMoviesApiUrl} from "../config/person";

export async function getPersonMovieCredits({id}: {id: Person["id"]}) {
  const apiUrl = personMoviesApiUrl({id});
  const combinedCredits = await fetcher<PersonMovieCredits>(apiUrl);

  return combinedCredits;
}
