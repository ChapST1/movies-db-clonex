import {twMerge} from "tailwind-merge";

export function ModalContentGrid({className, ...props}: React.ComponentProps<"section">) {
  return (
    <section
      className={twMerge(
        "grid grid-cols-1 gap-2 px-2 md:order-1 md:grid-cols-[1fr,250px]",
        className,
      )}
      {...props}
    />
  );
}
