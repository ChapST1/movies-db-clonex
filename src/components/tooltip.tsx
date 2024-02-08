import clsx from "clsx";

interface TooltipProps {
  children: React.ReactNode;
  tooltipContent: string;
  tooltipPosition: "top" | "bottom";
}

export function Tooltip({children, tooltipContent, tooltipPosition = "bottom"}: TooltipProps) {
  const position = clsx({
    "top-[-20px] group-hover/tooltip:top-[-30px] ": tooltipPosition === "top",
    "bottom-[-20px] group-hover/tooltip:bottom-[-30px]": tooltipPosition === "bottom",
  });

  return (
    <div className="group/tooltip relative">
      {children}
      <span
        className={`invisible  absolute left-[50%] z-30  w-[max-content] translate-x-[-50%] rounded-md border border-accent bg-background px-2 py-1  text-xs opacity-0 delay-200 duration-300 group-hover/tooltip:visible  group-hover/tooltip:opacity-100 ${position}`}
      >
        {tooltipContent}
      </span>
    </div>
  );
}
