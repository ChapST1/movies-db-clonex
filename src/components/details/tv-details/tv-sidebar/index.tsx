import type {TvDetails} from "@/types";

import {Suspense} from "react";

import {MovieDetailsSidebarKeywordsSkeleton} from "@/components/skeletons/movie-details-sidebar-keywords-skeleton";

import {TvSidebarKeywords} from "./tv-sidebar-keywords";

export function TvDetailSidebar({info}: {info: TvDetails}) {
  const {
    id,
    original_language,
    status,
    last_episode_to_air,
    number_of_episodes,
    number_of_seasons,
  } = info;

  return (
    <nav className="top-16 order-[-1] my-5 flex h-[max-content] flex-col overflow-y-auto md:sticky md:order-none md:h-[calc(100dvh-64px)] md:border-l md:border-border md:px-5 md:py-3 ">
      <p className="my-3 flex flex-col ">
        <span className="font-bold">Status</span>
        {status}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Original Language</span>
        {original_language}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Episodes</span>
        {number_of_episodes}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Seasons</span>
        {number_of_seasons}
      </p>
      <Suspense fallback={<MovieDetailsSidebarKeywordsSkeleton />}>
        <TvSidebarKeywords id={id} />
      </Suspense>
    </nav>
  );
}
