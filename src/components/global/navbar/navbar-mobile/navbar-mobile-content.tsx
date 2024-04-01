import clsx from "clsx";
import {usePathname} from "next/navigation";
import {useRef} from "react";
import Link from "next/link";

import {siteConfig} from "@/lib/constants/site-config";
import {Separator} from "@/components/ui/separator";

const {
  links: {primaryLinks, secondaryLinks},
} = siteConfig;

export function NavbarMobileContent({onToggle, isOpen}: {onToggle: () => void; isOpen: boolean}) {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement | null>(null);

  const navbarStyle = clsx({
    "visible opacity-100": isOpen,
    "invisble opacity-0 pointer-events-none": !isOpen,
  });

  const navbarUlStyle = clsx({
    "translate-x-0": isOpen,
    "-translate-x-[-100%] ": !isOpen,
  });

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const value = navbarRef.current;

    if (value === e.target) {
      onToggle();
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed left-0 top-16 z-20 flex h-[calc(100dvh-64px)] w-full items-center justify-end overflow-hidden bg-background/95 duration-300 ${navbarStyle}`}
      onClick={handleClose}
    >
      <ul
        className={` flex h-full w-[70%] flex-col  gap-2 border-l border-border  bg-background p-3 duration-300 ${navbarUlStyle}`}
      >
        {primaryLinks.map(({name, path, icon}) => {
          const activeStyles = clsx({
            "border-gradient bg-secondary pl-3 text-gradient": path === pathname,
            "border-border bg-background": path !== pathname,
          });

          return (
            <li key={name}>
              <Link
                className={`flex w-full items-center justify-start gap-2 rounded-md border-2  p-2 duration-300 hover:border-gradient hover:bg-secondary hover:pl-3 hover:text-gradient [&>*:nth-child(1)]:size-4 ${activeStyles}`}
                href={path}
                onClick={onToggle}
              >
                {icon}
                {name}
              </Link>
            </li>
          );
        })}

        <Separator className="my-5" />

        {secondaryLinks.map(({name, path, icon}) => {
          const activeStyles = clsx({
            "border-gradient bg-secondary pl-3 text-gradient": path === pathname,
            "border-border bg-background": path !== pathname,
          });

          return (
            <li key={name}>
              <Link
                className={`flex w-full items-center justify-start gap-2 rounded-md border-2  p-2 duration-300 hover:border-gradient hover:bg-secondary hover:pl-3 hover:text-gradient [&>*:nth-child(1)]:size-4 ${activeStyles}`}
                href={path}
                onClick={onToggle}
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
