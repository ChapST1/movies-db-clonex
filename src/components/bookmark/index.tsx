import {BookmarkIcon} from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {MediaButton} from "../media-button";

export function Bookmark() {
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
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
