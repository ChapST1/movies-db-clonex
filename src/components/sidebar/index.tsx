import {twMerge} from "tailwind-merge";

import {SidebarSearchMovie} from "./sidebar-search";
import {SidebarLinks} from "./sidebar-links";

export function Sidebar({className, ...props}: React.ComponentProps<"nav">) {
  return (
    <nav
      className={twMerge(
        "fixed left-0 top-16 z-30 flex h-[calc(100dvh-64px)] flex-col gap-6 overflow-y-auto bg-background p-4",
        className,
      )}
      {...props}
    >
      <SidebarSearchMovie />
      <SidebarLinks />
    </nav>
  );
}
