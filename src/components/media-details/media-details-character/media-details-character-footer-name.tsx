import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"p">;

export function MediaDetailsCharacterFooterName({className, ...props}: CurrentProps) {
  return <p className={twMerge("line-clamp-1", className)} {...props} />;
}
