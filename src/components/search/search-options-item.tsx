"use client";

import type {SearchFilters} from "@/types";

import {useSearchFilters} from "@/hooks/use-search-filters";

import {Switch} from "../ui/switch";

interface SearchOptionsProps extends React.ComponentProps<"button"> {
  paramsKey: SearchFilters;
}

export function SearchOptionsItem({paramsKey}: SearchOptionsProps) {
  const {active, setActive} = useSearchFilters(paramsKey);

  return <Switch checked={active} onClick={() => setActive(!active)} />;
}
