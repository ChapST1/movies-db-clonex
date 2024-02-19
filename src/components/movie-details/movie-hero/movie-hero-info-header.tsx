import type {MovieDetail} from "@/types";

import {formatMediaRuntime} from "@/lib/format-media-runtime";
import {Badge} from "@/components/ui/badge";

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
      <div className="flex flex-col justify-start gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">
          {original_title} <span className="font-light opacity-55">{`(${year})`}</span>
        </h1>
        <Badge className="w-[max-content]" variant="outline">
          {status}
        </Badge>
      </div>
      <time className="italic opacity-80">{formatMediaRuntime(runtime)}</time>
    </header>
  );
}
