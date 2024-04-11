import type {TvDetails} from "@/types";

import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {TvDetail} from "@/components/details/tv-details";
import {getTvById} from "@/lib/services/tv/get-tv-by-id";
import {Error} from "@/components/error";

export default async function TvDetailsPage({params: {id}}: {params: {id: string}}) {
  const tv = (await getTvById(Number(id))) as TvDetails;

  return (
    <ErrorBoundary errorComponent={Error}>
      <TvDetail tvDetails={tv} />
    </ErrorBoundary>
  );
}
