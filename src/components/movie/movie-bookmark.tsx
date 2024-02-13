"use client";
import {BookmarkIcon, BookmarkFilledIcon} from "@radix-ui/react-icons";
import {useState} from "react";

import {Tooltip} from "../tooltip";

import {MovieButton} from "./movie-button";

export function MovieBookmark({...props}: React.ComponentProps<"div">) {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <Tooltip tooltipContent="add to bookmark" tooltipPosition="bottom" {...props}>
      <MovieButton className=" *:scale-125" onClick={handleClick}>
        {active ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </MovieButton>
    </Tooltip>
  );
}
