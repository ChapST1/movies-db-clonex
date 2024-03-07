import type {MovieDetail} from "@/types";

export function MovieHeroUserScore({vote_average}: {vote_average: MovieDetail["vote_average"]}) {
  return (
    <div
      className="hidden size-10 select-none items-center justify-center rounded-xl border-2 border-border bg-background text-xs md:flex"
      title="user score"
    >
      <p>{Math.round(vote_average * 10)}%</p>
    </div>
  );
}
