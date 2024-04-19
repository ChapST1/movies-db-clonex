import {twMerge} from "tailwind-merge";

export function ModalContentSidebar({className, ...props}: React.ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={twMerge(
        "order-[-1] border-border *:top-0 *:border-none md:order-none md:border-l *:md:m-0 *:md:py-0",
        className,
      )}
    />
  );
}
