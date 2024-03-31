import type {GENDERS} from "@/lib/services/config/person";

export interface Person {
  adult: boolean;
  also_known_as: string[] | undefined;
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: keyof typeof GENDERS;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  media_type: "movie" | "person" | "tv";
}
