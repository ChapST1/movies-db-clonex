import type {Person} from "@/types";

import {fetcher} from "../fetcher";

import {generatePersonByIdApiUrl} from "./config";

export async function getPersonInfo({id}: {id: Person["id"]}) {
  const apiUrl = generatePersonByIdApiUrl({id});
  const person = await fetcher<Person>(apiUrl);

  return person;
}
