import type {Person, ServiceResponse} from "@/types";

import {fetcher} from "../../fetcher";
import {searchPersonApiUrl} from "../config/search";

export async function searchPerson({query, page}: {query: string; page: number}) {
  const apiUrl = searchPersonApiUrl({query, page});
  const results = await fetcher<ServiceResponse<Person>>(apiUrl);

  return results;
}
