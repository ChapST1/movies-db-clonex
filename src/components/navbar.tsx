import Link from "next/link";

import {DarkModeToggle} from "./dark-mode-toggle";
import {SearchMovie} from "./search-movie";

export function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-[120px] w-full flex-col items-center justify-between gap-2 border-b border-border bg-background/85 px-3 py-3 backdrop-blur-sm md:h-16 md:flex-row">
      <Link href="/">
        <h2 className="text-2xl font-semibold">Movies DBX</h2>
      </Link>

      <div className="flex items-center gap-3">
        <SearchMovie />
        <DarkModeToggle />
      </div>
    </header>
  );
}
