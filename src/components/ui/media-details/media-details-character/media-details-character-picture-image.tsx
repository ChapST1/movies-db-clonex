import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"img"> {
  imageUrl: string;
  title: string;
}

export function MediaDetailsCharacterPictureImage({
  imageUrl,
  title,
  className,
  ...props
}: CurrentProps) {
  return (
    <img
      alt={title}
      className={twMerge("aspect-[0.7] h-full w-full object-cover", className)}
      src={imageUrl}
      {...props}
    />
  );
}
