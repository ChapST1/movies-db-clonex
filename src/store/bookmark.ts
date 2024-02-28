import type {Movie} from "@/types";

import {create} from "zustand";
import {persist} from "zustand/middleware";

interface BookmarkProps {
  bookmarks: Movie["id"][];
  setMovie: (id: Movie["id"]) => void;
  removeMovie: (id: Movie["id"]) => void;
}

export const useBookmark = create(
  persist<BookmarkProps>(
    (set, get) => ({
      bookmarks: [],
      setMovie: (id) => {
        set((prev) => ({...prev, bookmarks: [...prev.bookmarks, id]}));
      },
      removeMovie: (id) => {
        const {bookmarks} = get();
        const newBookmark = bookmarks.filter((item) => item !== id);

        set((prev) => ({...prev, bookmarks: newBookmark}));
      },
    }),
    {name: "bookmark"},
  ),
);
