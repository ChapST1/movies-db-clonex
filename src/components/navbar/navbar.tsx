import Link from "next/link";
import {DashboardIcon} from "@radix-ui/react-icons";

import {ThemeMode} from "../theme-mode";
import {Bookmark} from "../bookmark";
import {MediaButton} from "../media-button";

import {NavbarSearchMovie} from "./navbar-search-movie";

export function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 flex  h-16 w-full items-center justify-between gap-2 border-b border-border bg-background/85 px-3 py-3 backdrop-blur-sm">
      <Link href="/">
        <h2 className="text-2xl font-semibold text-gradient md:text-3xl md:font-bold">
          Movies DBX
        </h2>
      </Link>

      {/* ⤵ mobile */}
      <label className="relative inline-flex cursor-pointer items-center md:hidden">
        <input className="peer sr-only" type="checkbox" value="" />
        <MediaButton className="peer-checked:border-gradient">
          <DashboardIcon />
        </MediaButton>

        <div className="pointer-events-none invisible fixed left-0 top-16 z-50 h-[calc(100dvh-64px)] w-full bg-background pt-3 opacity-0 duration-300 *:pointer-events-auto peer-checked:visible peer-checked:opacity-100">
          <NavbarSearchMovie />
          <div className="flex items-center justify-center gap-2 py-3">
            <Bookmark />
            <ThemeMode />
          </div>
        </div>
      </label>

      {/* ⤵ desktop */}
      <div className="hidden items-center gap-3 md:flex">
        <NavbarSearchMovie />
        <Bookmark />
        <ThemeMode />
      </div>
    </header>
  );
}
