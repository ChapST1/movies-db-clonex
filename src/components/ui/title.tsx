import {twMerge} from "tailwind-merge";

export function Title({className, ...props}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={twMerge(
        "sticky top-[120px] z-50 bg-background/85 py-3 text-xl  backdrop-blur-sm  md:top-16",
        className,
      )}
    >
      {props.children}
    </h2>
  );
}
