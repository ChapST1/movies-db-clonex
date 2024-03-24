"use client";

import {useState} from "react";
import {MenuIcon, X} from "lucide-react";

import {MediaButton} from "../../media-button";

import {NavbarMobileContent} from "./navbar-mobile-content";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => {
      // eslint-disable-next-line prettier/prettier
      prev
       ? (document.body.style.overflowY = "auto")
       : (document.body.style.overflowY = "hidden");

      return !prev;
    });
  };

  return (
    <div className="block overflow-hidden md:hidden">
      <MediaButton className="relative z-40" onClick={handleClick}>
        {open ? (
          <X className="size-5 fill-none stroke-gradient" />
        ) : (
          <MenuIcon className="size-5 fill-none stroke-gradient" />
        )}
      </MediaButton>

      <NavbarMobileContent isOpen={open} onToggle={handleClick} />
    </div>
  );
}
