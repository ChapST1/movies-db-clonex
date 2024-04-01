import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"picture"> {
  children: React.ReactNode;
}

export function MediaDetailsPosterPicture({children, className, ...props}: CurrentProps) {
  return (
    <picture className={twMerge("block h-full overflow-hidden rounded-md", className)} {...props}>
      {children}
    </picture>
  );
}
