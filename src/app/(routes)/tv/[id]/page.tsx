import type {TvDetails} from "@/types";

import {TvDetail} from "@/components/details/tv-details";
import {getTvById} from "@/lib/services/tv/get-tv-by-id";

export default async function TvDetailsPage({params: {id}}: {params: {id: string}}) {
  const tv = (await getTvById(Number(id))) as TvDetails;

  return <TvDetail tvDetails={tv} />;
}
