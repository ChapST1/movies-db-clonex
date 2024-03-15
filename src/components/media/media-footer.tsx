import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"footer">;

export function MediaFooter({className, ...props}: CurrentProps) {
  return (
    <footer className={twMerge("w-full rounded-sm bg-background p-2", className)} {...props} />
  );
}
