import clsx from "clsx";
import {twMerge} from "tailwind-merge";

interface TooltipProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  tooltipContent: string;
  tooltipPosition: "top" | "bottom";
}

export function Tooltip({
  children,
  tooltipContent,
  tooltipPosition = "bottom",
  className,
  ...props
}: TooltipProps) {
  const position = clsx({
    "top-[-20px] group-hover/tooltip:top-[-30px] ": tooltipPosition === "top",
    "bottom-[-20px] group-hover/tooltip:bottom-[-30px]": tooltipPosition === "bottom",
  });

  return (
    <div className={twMerge("group/tooltip relative", className)} {...props}>
      {children}
      <span
        className={`invisible absolute left-[50%]  z-30 hidden w-[max-content]  translate-x-[-50%] rounded-md border border-border bg-background px-2 py-1 text-xs  opacity-0 delay-200 duration-300 group-hover/tooltip:visible group-hover/tooltip:opacity-100  md:block ${position}`}
      >
        {tooltipContent}
      </span>
    </div>
  );
}
