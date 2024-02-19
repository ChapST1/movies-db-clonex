import {ReloadIcon} from "@radix-ui/react-icons";

export function MoviesMediaSkeleton() {
  return (
    <div className="my-4 flex h-96 w-full animate-pulse items-center justify-center rounded-md bg-accent">
      <ReloadIcon className="size-10 animate-spin" />
    </div>
  );
}
