"use client";
import {BookmarkIcon, BookmarkFilledIcon} from "@radix-ui/react-icons";
import {useState} from "react";

import {Tooltip} from "../tooltip";
import {MediaButton} from "../media-button";

export function MovieBookmark({...props}: React.ComponentProps<"div">) {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <Tooltip
      className="absolute right-3 top-3"
      tooltipContent="add to bookmark"
      tooltipPosition="bottom"
      {...props}
    >
      <MediaButton className=" *:scale-125 " onClick={handleClick}>
        {active ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </MediaButton>
    </Tooltip>
  );
}
