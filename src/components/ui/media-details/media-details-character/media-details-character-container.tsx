import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"article"> {
  children: React.ReactNode;
}

export function MediaDetailsCharacterContainer({children, className, ...props}: CurrentProps) {
  return (
    <article className={twMerge("relative aspect-[185/278]", className)} {...props}>
      {children}
    </article>
  );
}
