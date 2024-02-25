"use client";

import {useEffect} from "react";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {themes} from "@/lib/themes";
import {useTheme} from "@/store/theme";

export function ThemeMode() {
  const {theme, updateTheme} = useTheme();

  const handleClick = (cssClass: string) => {
    const isEmpty = document.documentElement.classList.toString().trim() === "";

    if (!isEmpty) {
      const classNames = document.documentElement.classList.toString().split(" ");

      document.documentElement.classList.remove(...classNames);
    }

    updateTheme(cssClass);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

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
