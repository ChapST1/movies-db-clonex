"use client";

import {FolderIcon} from "lucide-react";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from "next/link";

import {siteConfig} from "@/lib/constants/site-config";
import {Separator} from "@/components/ui/separator";

export function SidebarLinks() {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex flex-col gap-2">
        {siteConfig.links.map(({name, path, icon}) => {
          const activeStyles = clsx({
            "border-gradient bg-secondary pl-3 text-gradient": path === pathname,
            "border-border bg-background": path !== pathname,
          });

          return (
            <li key={name}>
              <Link
                className={`flex w-full items-center justify-start gap-2 rounded-md border-2  p-2 duration-300 hover:border-gradient hover:bg-secondary hover:pl-3 hover:text-gradient [&>*:nth-child(1)]:size-4 ${activeStyles}`}
                href={path}
              >
                {icon}
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Separator />
      <Link
        className="flex items-center justify-start gap-2 rounded-md border-2 border-border bg-background p-2 duration-300 hover:border-gradient hover:bg-secondary hover:pl-3 hover:text-gradient [&>*:nth-child(1)]:size-4"
        href="path"
      >
        <FolderIcon />
        Categories
      </Link>{" "}
    </>
  );
}
