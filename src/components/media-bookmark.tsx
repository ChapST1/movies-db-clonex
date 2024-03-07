"use client";

import {BookmarkIcon, BookmarkFilledIcon} from "@radix-ui/react-icons";

import {useBookmark} from "@/store/bookmark";

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
    <MediaButton className=" *:scale-125 " onClick={handleClick} {...props}>
      {bookmarks.includes(mediaId) ? <BookmarkFilledIcon /> : <BookmarkIcon />}
    </MediaButton>
  );
}
