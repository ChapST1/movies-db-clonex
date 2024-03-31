import type {Cast} from "../shared/shared-cast";

export interface TvCast {
  id: number;
  cast?: Cast[];
  crew?: Cast[];
}
