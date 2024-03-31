import type {Person} from "@/types";

import {fetcher} from "../../fetcher";
import {personIdApiUrl} from "../config/person";

export async function getPersonInfo({id}: {id: Person["id"]}) {
  const apiUrl = personIdApiUrl({id});
  const person = await fetcher<Person>(apiUrl);

  return person;
}
