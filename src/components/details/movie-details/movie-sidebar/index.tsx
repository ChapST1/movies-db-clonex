import type {MovieDetail} from "@/types";

import {Suspense} from "react";

import {MovieDetailsSidebarKeywordsSkeleton} from "@/components/skeletons/movie-details-sidebar-keywords-skeleton";
import {formatPrice} from "@/lib/format-price";

import {MovieSidebarKeywords} from "./movie-sidebar-keywords";

export function MovieDetailSidebar({info}: {info: MovieDetail}) {
  const {id, original_language, budget, revenue, status} = info;

  const formatBudget = formatPrice({value: budget});
  const formatRevenue = formatPrice({value: revenue});

  return (
    <nav className="top-16 order-[-1] my-5 flex h-[max-content] flex-col overflow-y-auto border-l border-border md:sticky md:order-none md:h-[calc(100dvh-64px)] md:px-5 md:py-3 ">
      <p className="my-3 flex flex-col ">
        <span className="font-bold">Status</span>
        {status}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Original Language</span>
        {original_language}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Budget</span>
        {formatBudget}
      </p>

      <p className="my-3 flex flex-col ">
        <span className="font-bold">Revenue</span>
        {formatRevenue}
      </p>
      <Suspense fallback={<MovieDetailsSidebarKeywordsSkeleton />}>
        <MovieSidebarKeywords id={id} />
      </Suspense>
    </nav>
  );
}
