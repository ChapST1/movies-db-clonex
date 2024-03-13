import {Loader} from "lucide-react";

export function MoviesMediaSkeleton() {
  return (
    <div className="my-4 flex h-96 w-full items-center justify-center rounded-md">
      <Loader className="size-10 animate-spin" />
    </div>
  );
}
