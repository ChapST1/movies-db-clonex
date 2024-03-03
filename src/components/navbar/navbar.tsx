import Link from "next/link";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";

import {ThemeMode} from "../theme-mode";
import {Bookmark} from "../bookmark";
import {MediaButton} from "../media-button";

export function Navbar() {
  return (
    <>
      <input className="peer hidden" id="menu-hamburguer" type="checkbox" />
      <header className="sticky left-0 top-0 z-50 flex  h-16 w-full items-center justify-between gap-2 border-b border-border bg-background/85 px-3 py-3 backdrop-blur-sm">
        <div className="flex gap-3">
          <label htmlFor="menu-hamburguer">
            <MediaButton className="peer-checked:border-gradient">
              <HamburgerMenuIcon />
            </MediaButton>
          </label>
          <Link href="/">
            <h2 className="text-2xl font-semibold text-gradient md:text-3xl md:font-bold">
              Movies DBX
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Bookmark />
          <ThemeMode />
        </div>
      </header>
    </>
  );
}
