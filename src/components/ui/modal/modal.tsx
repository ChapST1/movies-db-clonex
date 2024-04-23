"use client";

import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";

import {Sheet} from "@/components/ui/sheet";

type CurrentProps = React.ComponentProps<"div">;

export function Modal({children, ...props}: CurrentProps) {
  const router = useRouter();

  return (
    <Sheet
      modal
      open
      onOpenChange={(e) => {
        if (!e) {
          router.back();
        }
      }}
    >
      <div className={twMerge("fixed overflow-y-auto", props.className)} {...props}>
        {children}
      </div>
    </Sheet>
  );
}
