"use client";

import * as React from "react";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {themes} from "@/lib/themes";

export function DarkModeToggle() {
  const handleClick = (cssClass: string) => {
    const isEmpty = document.documentElement.classList.toString().trim() === "";

    if (!isEmpty) {
      const classNames = document.documentElement.classList.toString().split(" ");

      document.documentElement.classList.remove(...classNames);
    }

    document.documentElement.classList.add(cssClass);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient" size="icon" variant="outline" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({hex, cssClass}) => {
          return (
            <DropdownMenuItem
              key={hex}
              className="flex items-center justify-between"
              onClick={() => handleClick(cssClass)}
            >
              {hex}
              <span className="size-5 rounded-md" style={{background: hex}} />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
/* 
     // (
          // 
        // ))}
*/
