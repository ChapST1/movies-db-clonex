import type {PersonProfiles, Person} from "@/types";

import {fetcher} from "../../fetcher";
import {personGalleryApiUrl} from "../config/person";

export async function getPersonGallery({id}: {id: Person["id"]}) {
  const apiUrl = personGalleryApiUrl({id});
  const images = await fetcher<PersonProfiles>(apiUrl);

  return images;
}
