"use client";
import {twMerge} from "tailwind-merge";
import {useState} from "react";
import clsx from "clsx";

import {Button} from "./button";

interface MediaContainerProps extends React.ComponentProps<"section"> {
  mediaLength: number;
}

export function MediaContainer({children, className, mediaLength, ...props}: MediaContainerProps) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => setExpand(!expand);

  const height = clsx({
    "h-[470px] overflow-hidden": !expand,
    "h-[max-content] pb-[80px]": expand || !(mediaLength > 10),
  });

  const footerHeight = clsx({
    "h-[80px]": !expand,
    "h-[100px]": expand,
  });

  return (
    <section className={twMerge(`relative ${height}`, className)} {...props}>
      {children}

      {mediaLength > 10 && (
        <footer
          className={`sticky bottom-[-1px] left-0 z-30 flex w-full items-end justify-center  py-4 ${footerHeight} `}
          style={{
            backgroundImage: expand
              ? ""
              : "linear-gradient(to top, rgb(10 10 10), 80%, rgba(0, 0, 255, 0)) ",
          }}
        >
          <Button onClick={handleClick}>{expand ? "Show less" : "Show more"}</Button>
        </footer>
      )}
    </section>
  );
}
