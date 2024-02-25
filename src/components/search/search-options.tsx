import {Label} from "../ui/label";

import {SearchOptionsItem} from "./search-options-item";

export function SearchOptions() {
  return (
    <div className="flex  gap-2 *:flex *:items-center *:justify-between *:gap-3">
      <Label>
        Movies
        <SearchOptionsItem paramsKey="movie" />
      </Label>

      <Label>
        Tv series
        <SearchOptionsItem paramsKey="tv" />
      </Label>

      <Label>
        People
        <SearchOptionsItem paramsKey="people" />
      </Label>
    </div>
  );
}
