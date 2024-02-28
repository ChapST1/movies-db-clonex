"use client";
import {twMerge} from "tailwind-merge";
import {useState} from "react";
import clsx from "clsx";

import {ShadowEffect} from "../shadow-effect";

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
    "h-[60px]": !expand,
    "h-[70px]": expand,
  });

  return (
    <section className={twMerge(`relative ${height}`, className)} {...props}>
      {children}

      {mediaLength > 10 && (
        <ShadowEffect className={`flex items-center justify-center ${footerHeight}`}>
          <Button onClick={handleClick}>{expand ? "Show less" : "Show more"}</Button>
        </ShadowEffect>
      )}
    </section>
  );
}
