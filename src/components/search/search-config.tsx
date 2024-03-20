"use client";

import {Label} from "@/components/ui/label";
import {useSearchPreference, type SearchPreference} from "@/store/search-config";

import {Switch} from "../ui/switch";
import {useToast} from "../ui/use-toast";

export function SearchConfig() {
  const {toast} = useToast();
  const {searchPreference, updateSearchPreference} = useSearchPreference();

  const handleChange = (id: SearchPreference, isChecked: boolean) => {
    if (isChecked) {
      updateSearchPreference(id);
      toast({description: `the ${id.toUpperCase()} option is enable.`});
    }
  };

  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Search Settings</h4>
        <p className="text-sm text-muted-foreground">Customize your results.</p>
      </div>

      <div className="flex items-center justify-between">
        <Label className="flex-grow" htmlFor="only-movie">
          All
        </Label>
        <Switch
          checked={searchPreference === "all"}
          id="only-movie"
          name="all"
          onCheckedChange={(e) => handleChange("all", e)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="flex-grow" htmlFor="only-movie">
          Movies
        </Label>
        <Switch
          checked={searchPreference === "movie"}
          id="only-movie"
          name="movies"
          onCheckedChange={(e) => handleChange("movie", e)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="flex-grow" htmlFor="only-tv-series">
          Tv Series
        </Label>
        <Switch
          checked={searchPreference === "tv"}
          id="only-tv-series"
          name="tv"
          onCheckedChange={(e) => handleChange("tv", e)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="flex-grow" htmlFor="only-person">
          Person
        </Label>
        <Switch
          checked={searchPreference === "person"}
          id="only-person"
          name="person"
          onCheckedChange={(e) => handleChange("person", e)}
        />
      </div>
    </div>
  );
}
