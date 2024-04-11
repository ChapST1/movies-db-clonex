"use client";

import {ShieldAlert} from "lucide-react";

import {Button} from "../ui/button";

export function Error({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-3">
      <ShieldAlert className="mb-3 scale-150" />

      <h2>Opps! Something went wrong!</h2>
      <Button
        className=" flex w-[max-content] gap-2"
        size="sm"
        variant="destructive"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
