import {SearchMovie} from "./search-movie";
import {SearchOptions} from "./search-options";

export function SearchNavbar() {
  return (
    <header className="sticky top-16 z-30 flex items-center justify-between bg-background/85 px-1 py-2 backdrop-blur-sm">
      <SearchMovie />
      <SearchOptions />
    </header>
  );
}
