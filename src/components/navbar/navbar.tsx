import Link from "next/link";

import {ThemeMode} from "../theme-mode";
import {Bookmark} from "../bookmark";

import {NavbarMobile} from "./navbar-mobile";

export function Navbar() {
  return (
    <header className="group sticky left-0 top-0 z-50 flex h-16 w-full items-center justify-between gap-2 border-b border-border bg-background/85 px-3 py-3 backdrop-blur-sm">
      <Link href="/">
        <h2 className="text-2xl font-semibold text-gradient md:text-3xl md:font-bold">
          Movies DBX
        </h2>
      </Link>
      <div className="flex items-center gap-3">
        <Bookmark />
        <ThemeMode />
        {/* only visible for mobile users */}
        <NavbarMobile />
      </div>
    </header>
  );
}
