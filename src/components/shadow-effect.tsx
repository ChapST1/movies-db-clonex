import {twMerge} from "tailwind-merge";

export function ShadowEffect({className, ...props}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={twMerge("sticky bottom-[-1px] left-0 z-30 h-16 w-full md:h-[100px]", className)}
      {...props}
      style={{
        backgroundImage:
          "linear-gradient(to top, hsl(var(--background)), 50%, transparent, rgba(0, 0, 255, 0)) ",
      }}
    />
  );
}
