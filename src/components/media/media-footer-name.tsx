import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"h2">;

export function MediaFooterName({className, children, ...props}: CurrentProps) {
  return (
    <h2 className={twMerge("line-clamp-1", className)} {...props}>
      {children}
    </h2>
  );
}
