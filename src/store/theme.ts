import {create} from "zustand";

interface PropsTheme {
  theme: string;
  updateTheme: (theme: string) => void;
}

export const useTheme = create<PropsTheme>((set) => ({
  theme: "theme-00F5A0",
  updateTheme: (newTheme) => {
    set((prev) => ({...prev, theme: newTheme}));
  },
}));
