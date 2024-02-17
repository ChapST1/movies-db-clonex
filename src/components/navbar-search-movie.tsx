"use client";

import type {DbResponse, Movie} from "@/types";

import {ReloadIcon} from "@radix-ui/react-icons";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {useDebounce} from "@/hooks/use-debounce";
import {searchMovies} from "@/lib/services/search-movies";
import {generateFullPath} from "@/lib/create-full-path";

import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Button} from "./ui/button";

const PATH_MOVIE_SEARCH_PAGE = "/movies/search";

export function NavbarSearchMovie() {
  const [movieResults, setMovieResults] = useState<DbResponse<Movie>>();
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
      searchMovies({query: debounceValue})
        .then((data) => setMovieResults(data as DbResponse<Movie>))
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
        <div className="group relative rounded-md border border-border bg-background">
          <form className="w-[max-content]" onSubmit={handleSubmit}>
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
          <div className="search-results-container invisible absolute top-12 flex h-96 w-full flex-col gap-2 overflow-y-auto rounded-md border border-accent bg-background p-2 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
            {movieResults?.results.slice(0, 10).map(({id, poster_path, title, overview}) => {
              // eslint-disable-line
              const posterPath = generateFullPath({poster: {path: poster_path, size: "w92"}});

              return (
                <Link
                  key={id}
                  className="search-results-item grid grid-cols-[60px,1fr] gap-3 duration-500"
                  href={`movies/${id}`}
                >
                  <picture className="overflow-hidden rounded-md">
                    <img alt={title} className="h-full w-full" src={posterPath} />
                  </picture>

                  <div className="flex flex-col gap-2">
                    <h3 className="line-clamp-1 text-base font-bold">{title}</h3>
                    <p className="line-clamp-2 text-xs">{overview}</p>
                  </div>
                </Link>
              );
            })}

            {(movieResults?.results.length ?? 0) > 10 && (
              <Link href={`/movies/search?q=${debounceValue}`}>
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
