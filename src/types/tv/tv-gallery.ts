import type {Gallery} from "../shared/shared-gallery";

export interface TvGallery {
  backdrops: Gallery[];
  id: number;
  logos: Gallery[];
  posters: Gallery[];
}
