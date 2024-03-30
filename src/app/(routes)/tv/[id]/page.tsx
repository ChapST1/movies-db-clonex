import type {TvDetails} from "@/types";

import {TvDetail} from "@/components/tv-details";
import {getTvById} from "@/lib/services/get-tv-by-id";

export default async function TvDetailsPage({params: {id}}: {params: {id: string}}) {
  const tv = (await getTvById(Number(id))) as TvDetails;

  return <TvDetail tvDetails={tv} />;
}
