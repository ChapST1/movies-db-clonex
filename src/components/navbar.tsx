import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import Link from "next/link";

import {DarkModeToggle} from "./dark-mode-toggle";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Button} from "./ui/button";

export function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-[120px] w-full flex-col items-center justify-between gap-2 border-b border-border bg-background/85 px-3 py-3 backdrop-blur-sm md:h-16 md:flex-row">
      <Link href="/">
        <h2 className="text-2xl font-semibold">Movies DBX</h2>
      </Link>

      <div className="flex items-center gap-3">
        <form action="" className="w-[max-content]">
          <Label className="flex items-center gap-2">
            <Input placeholder="find movies..." type="search" />
            <Button
              className="flex min-h-10 min-w-10 items-center  justify-center rounded-sm border border-border bg-background p-0 hover:bg-accent"
              type="submit"
            >
              <MagnifyingGlassIcon className="size-5 stroke-foreground" />
            </Button>
          </Label>
        </form>
        <DarkModeToggle />
      </div>
    </header>
  );
}
