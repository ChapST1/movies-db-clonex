import {create} from "zustand";
import {persist} from "zustand/middleware";

interface PropsTheme {
  theme: string;
  updateTheme: (theme: string) => void;
}

export const useTheme = create(
  persist<PropsTheme>(
    (set) => ({
      theme: "#00F5A0",
      updateTheme: (newTheme) => {
        set((prev) => ({...prev, theme: newTheme}));
      },
    }),
    {name: "theme"},
  ),
);
