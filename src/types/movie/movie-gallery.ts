import type {Gallery} from "../shared/shared-gallery";

export interface MovieGallery {
  backdrops: Gallery[];
  id: number;
  logos: Gallery[];
  posters: Gallery[];
}
