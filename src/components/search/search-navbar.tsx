import {SettingsIcon} from "lucide-react";

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

import {MediaButton} from "../media-button";

import {SearchMedia} from "./search-media";
import {SearchConfig} from "./search-config";

export function SearchNavbar() {
  return (
    <header className="flex h-[max-content] flex-col items-center gap-2 bg-background/85 py-3 backdrop-blur-sm md:flex-row md:justify-between">
      <SearchMedia />
      <Popover>
        <PopoverTrigger asChild>
          <MediaButton className="group">
            <SettingsIcon className="size-5 duration-300 group-hover:rotate-180" />
          </MediaButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <SearchConfig />
        </PopoverContent>
      </Popover>
    </header>
  );
}
