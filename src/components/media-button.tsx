import {twMerge} from "tailwind-merge";

export function MediaButton({children, className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-border/40 bg-background/60   md:backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
