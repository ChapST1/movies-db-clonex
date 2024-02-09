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
      <h5 className="w-2/3 italic opacity-75">{tagline}</h5>
      <p className="mt-5 w-2/3">{overview}</p>
    </div>
  );
}
