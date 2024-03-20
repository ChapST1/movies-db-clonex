import {create} from "zustand";
import {persist} from "zustand/middleware";

export type SearchPreference = "all" | "movie" | "tv" | "person";

interface SearchConfig {
  searchPreference: SearchPreference;
  updateSearchPreference: (key: SearchPreference) => void;
}

export const useSearchPreference = create(
  persist<SearchConfig>(
    (set) => ({
      searchPreference: "all",
      updateSearchPreference: (key) => {
        set((prev) => ({...prev, searchPreference: key}));
      },
    }),
    {name: "searchPreference"},
  ),
);
