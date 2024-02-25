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
      <img
        alt={title}
        className="w-44 pb-5 mix-blend-luminosity md:w-auto md:pb-0"
        src={posterPath}
      />
    </picture>
  );
}
