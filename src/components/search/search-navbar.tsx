import {SearchMedia} from "./search-media";
import {SearchOptions} from "./search-options";

export function SearchNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-[max-content] flex-col items-center gap-2 bg-background/85 py-1 backdrop-blur-sm md:flex-row md:justify-between">
      <SearchMedia />
      <SearchOptions />
    </header>
  );
}
