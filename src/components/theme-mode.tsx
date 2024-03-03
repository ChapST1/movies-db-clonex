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
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full border-2 border-gradient bg-background p-1 hover:border-border"
          size="icon"
          variant="outline"
        >
          {/* <BlendingModeIcon className="size-5 fill-none stroke-gradient " /> */}
          <Palette className="size-5 fill-none stroke-gradient " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-4 gap-1">
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
