import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"h1"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentHeaderTitle({children, className, ...props}: CurrentProps) {
  return (
    <h1 {...props} className={twMerge("text-3xl font-bold", className)}>
      {children}
    </h1>
  );
}
