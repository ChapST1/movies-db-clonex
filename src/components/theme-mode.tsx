"use client";

import {useEffect} from "react";
import {BlendingModeIcon} from "@radix-ui/react-icons";

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
        <Button
          className="rounded-full border-2 border-gradient bg-background p-1 hover:border-border"
          size="icon"
          variant="outline"
        >
          <BlendingModeIcon className="size-5 fill-none stroke-gradient " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themes.map(({hex, cssClass}) => {
          return (
            <DropdownMenuItem
              key={hex}
              className="flex items-center justify-between"
              onClick={() => handleClick(cssClass)}
            >
              <span className="size-5 rounded-full" style={{background: hex}} />
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
