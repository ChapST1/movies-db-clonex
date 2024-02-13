import {twMerge} from "tailwind-merge";

export function MovieButton({children, className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-accent/40 bg-background/40 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
