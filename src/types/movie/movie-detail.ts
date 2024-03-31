import type {Detail} from "../shared/shared-detail";

export interface MovieDetail extends Detail {
  belongs_to_collection: null;
  budget: number;
  imdb_id: string;
  original_title: string;
  popularity: number;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
}
