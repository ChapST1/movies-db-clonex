import type {SearchPreference} from "@/types";

import {create} from "zustand";
import {persist} from "zustand/middleware";

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
