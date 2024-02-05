import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

import {DarkModeToggle} from "./dark-mode-toggle";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Button} from "./ui/button";

export function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b-2 border-border px-3">
      <h2 className="text-2xl font-semibold">Movies DBX</h2>

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
