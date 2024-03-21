import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"div">;

export function MediaGrid({className, ...props}: CurrentProps) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-3 gap-2 md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] md:gap-4",
        className,
      )}
      {...props}
    />
  );
}
