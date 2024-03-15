import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContent({children, className, ...props}: CurrentProps) {
  return (
    <div className={twMerge("", className)} {...props}>
      {children}
    </div>
  );
}
