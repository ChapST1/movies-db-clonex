import {twMerge} from "tailwind-merge";

export function Title({className, ...props}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={twMerge(
        // "sticky top-[120px] z-20  bg-gradient-to-b from-background via-background/50 via-80% py-5 text-xl md:top-16",
        "sticky top-[120px] z-20 bg-background/85 py-3 text-xl  backdrop-blur-sm  md:top-16",
        className,
      )}
    >
      {props.children}
    </h2>
  );
}
