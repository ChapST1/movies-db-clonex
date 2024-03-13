import {twMerge} from "tailwind-merge";

import {Skeleton} from "../ui/skeleton";

export function MovieGridSkeleton({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]",
        className,
      )}
      {...props}
    >
      {Array(10)
        .fill(null)
        .map((item, index) => {
          return <Skeleton key={index} className="h-64  w-full" />;
        })}
    </div>
  );
}
