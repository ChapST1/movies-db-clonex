import {twMerge} from "tailwind-merge";

export function MovieHeroInfo({className, children, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={twMerge("pt-10", className)} {...props}>
      {children}
    </div>
  );
}
