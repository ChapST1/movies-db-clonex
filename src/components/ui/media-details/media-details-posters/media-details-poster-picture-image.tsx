import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"img">;

export function MediaDetailsPosterPictureImage({alt, className, ...props}: CurrentProps) {
  return (
    <img
      alt={alt}
      className={twMerge("block h-full overflow-hidden rounded-md", className)}
      {...props}
    />
  );
}
