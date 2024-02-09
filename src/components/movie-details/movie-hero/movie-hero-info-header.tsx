import type {MovieDetail} from "@/types";

import {formatMediaRuntime} from "@/lib/format-media-runtime";

export function MovieHeroInfoHeader({
  original_title,
  year,
  runtime,
  status,
}: {
  original_title: MovieDetail["original_title"];
  year: MovieDetail["release_date"];
  runtime: MovieDetail["runtime"];
  status: MovieDetail["status"];
}) {
  return (
    <header>
      <div className="flex items-center justify-start gap-2">
        <h1 className="text-3xl font-bold">
          {original_title} <span className="font-light opacity-55">{`(${year})`}</span>
        </h1>
        <p className="w-[max-content] rounded-lg bg-green-950 px-2 py-1 text-xs">{status}</p>
      </div>
      <time className="italic opacity-80">{formatMediaRuntime(runtime)}</time>
    </header>
  );
}
