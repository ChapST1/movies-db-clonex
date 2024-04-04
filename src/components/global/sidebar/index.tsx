import {twMerge} from "tailwind-merge";

import {SidebarSearchMovie} from "./sidebar-search";
import {SidebarLinks} from "./sidebar-links";

export function Sidebar({className, ...props}: React.ComponentProps<"nav">) {
  return (
    <nav
      className={twMerge(
        "sticky top-16 flex h-[calc(100dvh-64px)] flex-col gap-6 overflow-y-auto border-r border-border bg-background p-3",
        className,
      )}
      {...props}
    >
      <SidebarSearchMovie />
      <SidebarLinks />
    </nav>
  );
}
