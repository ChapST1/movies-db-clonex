import type {Cast} from "../shared/shared-cast";

export interface MovieCast {
  id: number;
  cast: Cast[];
  crew: Cast[];
}
