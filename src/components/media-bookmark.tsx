"use client";

import {BookmarkIcon, BookmarkFilledIcon} from "@radix-ui/react-icons";

import {useBookmark} from "@/store/bookmark";

import {Tooltip} from "./tooltip";
import {MediaButton} from "./media-button";

interface MediaBookmarkProps extends React.ComponentProps<"div"> {
  mediaId: number;
}

export function MediaBookmark({mediaId, ...props}: MediaBookmarkProps) {
  const {bookmarks, setMovie, removeMovie} = useBookmark();

  const handleClick = () => {
    if (bookmarks.includes(mediaId)) {
      removeMovie(mediaId);
    } else {
      setMovie(mediaId);
    }
  };

  return (
    <Tooltip
      className="absolute right-3 top-3"
      tooltipContent="add to bookmark"
      tooltipPosition="bottom"
      {...props}
    >
      <MediaButton className=" *:scale-125 " onClick={handleClick}>
        {bookmarks.includes(mediaId) ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </MediaButton>
    </Tooltip>
  );
}
