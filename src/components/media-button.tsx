import {twMerge} from "tailwind-merge";

export function MediaButton({children, className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-border bg-background/80 duration-300 hover:border-gradient hover:bg-secondary md:backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
