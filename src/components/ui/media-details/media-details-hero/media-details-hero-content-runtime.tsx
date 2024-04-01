import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"time"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentRuntime({children, className, ...props}: CurrentProps) {
  return (
    <time className={twMerge("italic opacity-80", className)} {...props}>
      {children}
    </time>
  );
}
