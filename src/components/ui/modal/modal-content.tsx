import {twMerge} from "tailwind-merge";

import {SheetContent} from "@/components/ui/sheet";

type CurrentProps = React.ComponentProps<"div">;

export function ModalContent({children, ...props}: CurrentProps) {
  return (
    <SheetContent
      className={twMerge(
        "h-[90dvh] max-h-[90dvh] min-h-[90dvh] overflow-y-auto p-0",
        props.className,
      )}
      side="bottom"
    >
      <div>{children}</div>
    </SheetContent>
  );
}
