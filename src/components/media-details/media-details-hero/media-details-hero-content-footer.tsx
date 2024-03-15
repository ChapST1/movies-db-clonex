import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"footer"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentFooter({children, className, ...props}: CurrentProps) {
  return (
    <footer className={twMerge("relative flex flex-col  gap-4 py-2", className)} {...props}>
      {children}
    </footer>
  );
}
