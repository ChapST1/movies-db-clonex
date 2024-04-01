import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentOverview({children, className, ...props}: CurrentProps) {
  return (
    <p className={twMerge("mt-5 md:w-2/3", className)} {...props}>
      {children}
    </p>
  );
}
