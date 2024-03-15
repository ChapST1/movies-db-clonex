import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"header"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentHeader({children, className, ...props}: CurrentProps) {
  return (
    <header className={twMerge("", className)} {...props}>
      {children}
    </header>
  );
}
