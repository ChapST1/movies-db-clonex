"use client";

import {useRouter} from "next/navigation";
import {useEffect, useRef} from "react";
import {twMerge} from "tailwind-merge";

type CurrentProps = React.ComponentProps<"div">;

// use dialog tag
export function Modal({children, ...props}: CurrentProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!modalRef.current) return;

    if (event.target === modalRef.current) {
      router.back();
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.removeProperty("overflow-y");
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className={twMerge(
        "fixed left-0 top-16 z-[50] flex h-[calc(100dvh-64px)] w-full items-center justify-center overflow-y-auto bg-background/85 *:border *:border-border md:backdrop-blur-sm",
        props.className,
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
