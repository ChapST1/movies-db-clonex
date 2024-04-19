import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"article">;

export function ModalContent({children, ...props}: CurrentProps) {
  return (
    <article
      className={twMerge("my-2 w-[90%] border border-border bg-background", props.className)}
    >
      {children}
    </article>
  );
}
