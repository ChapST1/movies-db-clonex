import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"img"> {
  children: React.ReactNode;
}

export function MediaDetailsPosterPictureImage({alt, className, ...props}: CurrentProps) {
  return (
    <img
      alt={alt}
      className={twMerge("block h-full overflow-hidden rounded-md", className)}
      {...props}
    />
  );
}
