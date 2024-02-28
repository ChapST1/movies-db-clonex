"use client";
import {BookmarkIcon} from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {useBookmark} from "@/store/bookmark";

import {MediaButton} from "../media-button";
import {Badge} from "../ui/badge";

export function Bookmark() {
  const {bookmarks} = useBookmark();

  return (
    <Dialog>
      <DialogTrigger>
        <MediaButton className="border-border hover:bg-accent">
          <BookmarkIcon className="size-5" />
        </MediaButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bookmarks</DialogTitle>
          <DialogDescription>
            <div className="flex w-full flex-wrap gap-2 py-4">
              {bookmarks.map((item) => {
                return <Badge key={item}>{item}</Badge>;
              })}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
