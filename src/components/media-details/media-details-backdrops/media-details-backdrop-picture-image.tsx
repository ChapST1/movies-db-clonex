import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"img">;

export function MediaDetailsBackdropPictureImage({className, alt, ...props}: CurrentProps) {
  return <img alt={alt} className={twMerge("", className)} {...props} />;
}
