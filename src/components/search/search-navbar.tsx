import {SearchMovie} from "./search-movie";
import {SearchOptions} from "./search-options";

export function SearchNavbar() {
  return (
    <header className="sticky  top-16 z-30 flex h-[max-content] flex-col items-center gap-2 bg-background/85 px-1 py-2  backdrop-blur-sm md:flex-row md:justify-between">
      <SearchMovie />
      <SearchOptions />
    </header>
  );
}
