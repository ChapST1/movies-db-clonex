import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"picture">;

export function MediaDetailsBackdropPicture({className, ...props}: CurrentProps) {
  return <picture className={twMerge("", className)} {...props} />;
}
