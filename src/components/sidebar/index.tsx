import Link from "next/link";

import {siteConfig} from "@/lib/constants/site-config";

import {SidebarSearchMovie} from "./sidebar-search";

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-16 z-30 flex h-[calc(100dvh-64px)] w-[200px] flex-col gap-6 bg-background px-2 py-2">
      <SidebarSearchMovie />
      <ul className="flex flex-grow flex-col gap-2">
        {siteConfig.links.map(({name, path, icon}, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center justify-start gap-2 rounded-md border-2 border-border bg-background p-2 duration-300 hover:border-gradient hover:pl-3 hover:text-gradient [&>*:nth-child(1)]:size-4"
                href={path}
              >
                {icon}
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
