import {Clapperboard, FolderIcon, Home, SearchIcon, Tv, UserRound} from "lucide-react";

/**
 * Siteconfig - Routes
 */

const primaryLinks = [
  {name: "Home", path: "/", icon: <Home />},
  {name: "Movies", path: "/movies", icon: <Clapperboard />},
  {name: "Tv Series", path: "/tv", icon: <Tv />},
  {name: "People", path: "/people", icon: <UserRound />},
];

const secondaryLinks = [
  {name: "Categories", path: "/categories", icon: <FolderIcon />},
  {name: "Search", path: "/search", icon: <SearchIcon />},
];

const links = {
  primaryLinks,
  secondaryLinks,
};

export const siteConfig = {
  links,
};
