import type {Media} from "../shared/shared-media";

export interface Movie extends Media {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}
