import {twMerge} from "tailwind-merge";

export function Title({className, ...props}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={twMerge(
        "sticky top-16 z-40 bg-background/85 py-3 text-base  backdrop-blur-sm md:text-xl",
        className,
      )}
    >
      {props.children}
    </h2>
  );
}
