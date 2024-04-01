import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"img">;

export function MediaPictureImage({className, alt, ...props}: CurrentProps) {
  return (
    <img
      alt={alt}
      className={twMerge(
        "aspect-[0.7] h-full w-full  rounded-media  border-2 border-transparent object-cover duration-300 hover:border-gradient",
        className,
      )}
      {...props}
    />
  );
}
