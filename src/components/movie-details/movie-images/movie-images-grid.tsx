import {twMerge} from "tailwind-merge";

export function MovieImagesGrid({className, ...props}: React.ComponentProps<"div">) {
  return <div className={twMerge("grid grid-cols-3 gap-3 md:grid-cols-4", className)} {...props} />;
}
