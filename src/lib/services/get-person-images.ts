import type {PersonProfiles} from "@/types";

import {type Person} from "@/types";

import {fetcher} from "../fetcher";

import {generatePersonImagesApiUrl} from "./config";

export async function getPersonImages({id}: {id: Person["id"]}) {
  const apiUrl = generatePersonImagesApiUrl({id});
  const images = await fetcher<PersonProfiles>(apiUrl);

  return images;
}
