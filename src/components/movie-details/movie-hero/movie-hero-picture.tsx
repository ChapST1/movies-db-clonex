import type {MovieDetail} from "@/types";

export function MovieHeroPicture({
  title,
  posterPath,
}: {
  title: MovieDetail["title"];
  posterPath: MovieDetail["poster_path"];
}) {
  return (
    <picture className="relative flex items-center justify-center">
      <img alt={title} src={posterPath} />
    </picture>
  );
}
