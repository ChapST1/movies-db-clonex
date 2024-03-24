"use client";

import {useEffect} from "react";
import {Palette} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {themes as allThemes} from "@/lib/themes";
import {useTheme} from "@/store/theme";
import {createThemes} from "@/lib/create-themes";

import {MediaButton} from "./media-button";

export function ThemeMode() {
  const {theme, updateTheme} = useTheme();
  const themes = createThemes(allThemes);

  const handleClick = (key: string) => {
    updateTheme(key);
  };

  useEffect(() => {
    const currentTheme = themes.find((item) => item.key === theme);

    currentTheme?.variables.forEach((item) => {
      if (!item) return;

      const [property, value] = item;

      document.documentElement.style.setProperty(property, value);
    });
  }, [theme, themes]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MediaButton className="bg-background">
          <Palette className="size-5 fill-none stroke-gradient" />
        </MediaButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-6 gap-1">
        {themes.map(({key}, index) => {
          return (
            <DropdownMenuItem key={index} onClick={() => handleClick(key)}>
              <span className="size-5 rounded-full" data-id={key} style={{background: key}} />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
