import {twMerge} from "tailwind-merge";

interface CurrentProps extends React.ComponentProps<"footer"> {
  children: React.ReactNode;
}

export function MediaDetailsCharacterFooter({children, className, ...props}: CurrentProps) {
  return (
    <footer
      className={twMerge(
        "absolute bottom-4 left-[50%] w-[90%] translate-x-[-50%] rounded-md bg-background/75 p-2",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
