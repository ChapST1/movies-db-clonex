import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"picture">;

export function MediaPicture({className, ...props}: CurrentProps) {
  return (
    <picture
      className={twMerge("relative block flex-grow overflow-hidden rounded-media", className)}
      {...props}
    />
  );
}
