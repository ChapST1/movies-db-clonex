import {twMerge} from "tailwind-merge";

export function MovieGridSkeleton({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]",
        className,
      )}
      {...props}
    >
      {Array(20)
        .fill(null)
        .map((item, index) => {
          return (
            <div key={index} className="h-64  w-full animate-pulse rounded-md bg-secondary">
              {" "}
            </div>
          );
        })}
    </div>
  );
}
