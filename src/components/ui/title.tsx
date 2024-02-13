import {twMerge} from "tailwind-merge";

export function Title({className, ...props}: React.ComponentProps<"h2">) {
  return <h2 className={twMerge("py-3 text-xl", className)}>{props.children}</h2>;
}
