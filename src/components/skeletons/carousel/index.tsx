import {Skeleton} from "@/components/ui/skeleton";

export function CarouselSkeleton() {
  return (
    <div className="grid h-dvh w-full grid-cols-1 gap-3 py-6 md:h-[650px] md:grid-cols-[500px,1fr]">
      <Skeleton />
      <div>
        <Skeleton className="h-8 w-72" />
        <Skeleton className="mt-2 h-5 w-14" />
        <div className="flex gap-2 py-3">
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
        </div>
        <Skeleton className="my-3 h-24 w-4/5" />
      </div>
    </div>
  );
}
