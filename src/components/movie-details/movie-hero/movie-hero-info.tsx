import {twMerge} from "tailwind-merge";

export function MovieHeroInfo({className, children, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={twMerge("", className)} {...props}>
      {children}
    </div>
  );
}
