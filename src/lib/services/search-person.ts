import type {DbResponse, Person} from "@/types";

import {fetcher} from "../fetcher";

import {generateSearchPersonApiUrl} from "./config";

export async function searchPerson({query}: {query: string}) {
  const apiUrl = generateSearchPersonApiUrl({query});
  const results = await fetcher<DbResponse<Person>>(apiUrl);

  return results;
}
