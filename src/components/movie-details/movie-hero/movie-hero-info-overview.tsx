import type {MovieDetail} from "@/types";

export function MovieHeroInfoOverview({
  overview,
  tagline,
}: {
  overview: MovieDetail["overview"];
  tagline: MovieDetail["tagline"];
}) {
  return (
    <div>
      <h5 className="italic opacity-75 md:w-2/3">{tagline}</h5>
      <p className="mt-5 md:w-2/3">{overview}</p>
    </div>
  );
}
