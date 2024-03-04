import {Clapperboard, Home, Tv, UserRound} from "lucide-react";

/**
 * Siteconfig - Routes
 */
const links = [
  {name: "Home", path: "/", icon: <Home />},
  {name: "Movies", path: "/movies", icon: <Clapperboard />},
  {name: "Tv Series", path: "/tv", icon: <Tv />},
  {name: "People", path: "/people", icon: <UserRound />},
];

export const siteConfig = {
  links,
};
