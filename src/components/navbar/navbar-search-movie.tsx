"use client";

/**
 * use the multi - search endpoint
 * conditional rendering  movie.mediatype = "movie" | "person" | "tv"
 */

import type {DbResponse, Movie, Person, Tv} from "@/types";

import {ReloadIcon} from "@radix-ui/react-icons";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {useDebounce} from "@/hooks/use-debounce";
import {searchMultiMedia} from "@/lib/services/search-multi-media";

import {Input} from "../ui/input";
import {Label} from "../ui/label";
import {Button} from "../ui/button";

import {NavbarSearchResultMovie} from "./navbar-search-result-movie";
import {NavbarSearchResultPerson} from "./navbar-search-result-person";
import {NavbarSearchResultTv} from "./navbar-search-result-tv";

const PATH_MOVIE_SEARCH_PAGE = "/search";

export function NavbarSearchMovie() {
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
        <div className="group relative m-auto w-[max-content] rounded-md border border-border bg-background">
          <form className="m-auto w-[max-content] p-1 " onSubmit={handleSubmit}>
            <Label className="flex items-center gap-2">
              <Input
                className="border-none"
                placeholder="find movies..."
                type="search"
                onChange={handleChange}
              />
              <Button
                className="flex min-h-10 min-w-10 items-center  justify-center rounded-sm bg-background p-0 hover:bg-accent"
                type="submit"
              >
                {loading ? (
                  <ReloadIcon className="size-5 animate-spin stroke-foreground opacity-50" />
                ) : (
                  <MagnifyingGlassIcon className="size-5 stroke-foreground opacity-50" />
                )}
              </Button>
            </Label>

            {/*  */}
          </form>
          <div className="search-results-container invisible absolute top-14 flex h-96 w-full flex-col gap-2 overflow-y-auto rounded-md border border-border bg-background p-2 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
            {movieResults?.results.slice(0, 10).map((item) => {
              const {media_type} = item;

              return (
                <>
                  {media_type === "movie" && <NavbarSearchResultMovie movie={item as Movie} />}
                  {media_type === "person" && <NavbarSearchResultPerson person={item as Person} />}
                  {media_type === "tv" && <NavbarSearchResultTv tv={item as Tv} />}
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
