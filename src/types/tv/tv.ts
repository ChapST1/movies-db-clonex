import type {Media} from "../shared/shared-media";

export interface Tv extends Media {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}
