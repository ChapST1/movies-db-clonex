"use client";

import type {DbResponse, Movie, Person, Tv} from "@/types";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Loader, Search} from "lucide-react";

import {useDebounce} from "@/hooks/use-debounce";
import {searchMultiMedia} from "@/lib/services/search-multi-media";

import {Input} from "../../ui/input";
import {Label} from "../../ui/label";
import {Button} from "../../ui/button";

import {SidebarSearchResultMovie} from "./sidebar-search-result-movie";
import {SidebarSearchResultPerson} from "./sidebar-search-result-person";
import {SidebarSearchResultTv} from "./sidebar-search-result-tv";

const PATH_MOVIE_SEARCH_PAGE = "/search";

export function SidebarSearchMovie() {
  const [movieResults, setMovieResults] = useState<DbResponse<Movie | Person | Tv>>();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceValue = useDebounce(query, 2000);
  const path = usePathname();
  const isInSearchPage = path === PATH_MOVIE_SEARCH_PAGE;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debounceValue.trim() !== "") {
      // get results
      searchMultiMedia({query: debounceValue})
        .then((data) => setMovieResults(data as DbResponse<Movie | Person | Tv>))
        .finally(() => setLoading(false));
    }
  }, [debounceValue]);

  useEffect(() => {
    if (query.trim() === "") {
      setLoading(false);
      setMovieResults(undefined);
    }
  }, [query]);

  return (
    <>
      {!isInSearchPage && (
        <div className="group relative flex w-full flex-col gap-2 bg-background">
          <form
            className="m-auto w-full rounded-md border-2 border-border duration-300 hover:border-gradient"
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
                className="pointer-events-none flex min-h-10 min-w-10  items-center justify-center rounded-sm bg-transparent p-0"
                type="submit"
              >
                {loading ? (
                  <Loader className="size-5 animate-spin stroke-foreground opacity-50" />
                ) : (
                  <Search className="size-5 stroke-foreground opacity-50" />
                )}
              </Button>
            </Label>

            {/*  */}
          </form>
          <div className="search-results-container top-14 flex h-0 w-full flex-col gap-2 overflow-y-auto rounded-md border border-border bg-background p-0  p-2 opacity-0 transition-[height] duration-300 group-hover:h-60 group-hover:opacity-100">
            {movieResults?.results.slice(0, 10).map((item) => {
              const {media_type} = item;

              return (
                <>
                  {media_type === "movie" && (
                    <SidebarSearchResultMovie key={item.id} movie={item as Movie} />
                  )}
                  {media_type === "person" && (
                    <SidebarSearchResultPerson key={item.id} person={item as Person} />
                  )}
                  {media_type === "tv" && <SidebarSearchResultTv key={item.id} tv={item as Tv} />}
                </>
              );
            })}

            {(movieResults?.results.length ?? 0) > 10 && (
              <Link href={`/search?q=${debounceValue}`}>
                <Button className="m-auto my-3 block text-xs" size="sm" variant="outline">
                  Show more results
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
