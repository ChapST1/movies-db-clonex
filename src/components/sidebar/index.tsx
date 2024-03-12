import Link from "next/link";
import {FolderIcon} from "lucide-react";

import {siteConfig} from "@/lib/constants/site-config";

import {Separator} from "../ui/separator";

import {SidebarSearchMovie} from "./sidebar-search";
import {SidebarLinks} from "./sidebar-links";

export function Sidebar() {
  return (
    <nav className="fixed  left-0 top-16 z-30 flex h-[calc(100dvh-64px)] w-[200px] flex-col gap-6 overflow-y-scroll bg-background px-2 py-2">
      <SidebarSearchMovie />
      <SidebarLinks />
    </nav>
  );
}
