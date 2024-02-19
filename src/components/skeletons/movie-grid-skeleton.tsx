export function MovieGridSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {Array(10)
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
