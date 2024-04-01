import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"picture">;

export function MediaPicture({className, ...props}: CurrentProps) {
  return (
    <picture
      className={twMerge("relative block h-[max-content] overflow-hidden", className)}
      {...props}
    />
  );
}
