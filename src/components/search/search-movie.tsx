"use client";

import {useEffect, useState} from "react";
import {MagnifyingGlassIcon, ReloadIcon} from "@radix-ui/react-icons";
import {useRouter, useSearchParams} from "next/navigation";

import {useDebounce} from "@/hooks/use-debounce";

import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Label} from "../ui/label";

export function SearchMovie() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const params = useSearchParams();
  const debounceValue = useDebounce(query, 2000);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debounceValue.trim() !== "") {
      const newParams = new URLSearchParams(params.toString());

      newParams.delete("page");
      newParams.set("q", debounceValue);
      setLoading(false);
      router.push(`/search?${newParams.toString()}`);
    }
    /**
     * Don't add the dependency "params"  in the effect: BADD
     */
  }, [debounceValue, router]);// eslint-disable-line

  useEffect(() => {
    if (query.trim() === "") setLoading(false);
  }, [query]);

  return (
    <form
      className="sticky top-[120px] z-30 w-[max-content] rounded-md border border-border bg-background/80 p-2 backdrop-blur-sm md:top-[68px]"
      onSubmit={handleSubmit}
    >
      <Label className="flex items-center gap-2">
        <Input
          className="border-none bg-transparent"
          placeholder="find movies..."
          type="search"
          onChange={handleChange}
        />
        <Button
          className="flex min-h-10 min-w-10 items-center justify-center rounded-sm  border-none bg-transparent p-0 hover:bg-accent"
          type="submit"
        >
          {loading ? (
            <ReloadIcon className="size-5 animate-spin stroke-foreground opacity-50" />
          ) : (
            <MagnifyingGlassIcon className="size-5 stroke-foreground opacity-50" />
          )}
        </Button>
      </Label>
    </form>
  );
}
