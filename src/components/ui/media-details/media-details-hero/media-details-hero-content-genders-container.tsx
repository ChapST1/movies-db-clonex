import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function MediaDetailsHeroContentGendersContainer({
  children,
  className,
  ...props
}: CurrentProps) {
  return (
    <div className={twMerge("flex flex-wrap gap-3 py-1", className)} {...props}>
      {children}
    </div>
  );
}
