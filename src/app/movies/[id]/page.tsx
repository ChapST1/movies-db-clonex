import type {MovieDetail} from "@/types";

import {Suspense} from "react";

import {getMovieById} from "@/lib/services/get-movie-by-id";
import {MovieDetailHero} from "@/components/movie-details/movie-hero";
import {MovieCharacters} from "@/components/movie-details/movie-characters";
import {MovieImages} from "@/components/movie-details/movie-images";
import {formatPrice} from "@/lib/format-price";
import {MovieSidebarKeywords} from "@/components/movie-details/movie-sidebar/movie-sidebar-keywords";
import {MovieRecomendations} from "@/components/movie-details/movie-recomendations";

export default async function MovieDetail({params: {id}}: {params: {id: MovieDetail["id"]}}) {
  const movie = (await getMovieById(id)) as MovieDetail;

  const {status, budget, revenue, original_language} = movie;

  return (
    <div>
      <MovieDetailHero movieDetail={movie} />
      <section className="grid grid-cols-[1fr,300px] gap-4">
        <div>
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <MovieCharacters id={id} />
          </Suspense>

          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <MovieImages id={id} />
          </Suspense>

          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <MovieRecomendations id={id} />
          </Suspense>
        </div>
        <nav className="sticky top-16 my-5 flex h-[max-content] flex-col px-5 py-3 ">
          <p className="my-3 flex flex-col ">
            <span className="font-bold">Status</span>
            {status}
          </p>

          <p className="my-3 flex flex-col ">
            <span className="font-bold">Original Language</span>
            {original_language}
          </p>

          <p className="my-3 flex flex-col ">
            <span className="font-bold">Budget</span>
            {formatPrice({value: budget})}
          </p>

          <p className="my-3 flex flex-col ">
            <span className="font-bold">Revenue</span>
            {formatPrice({value: revenue})}
          </p>
          <Suspense fallback={<span>loading...</span>}>
            <MovieSidebarKeywords id={id} />
          </Suspense>
        </nav>
      </section>
    </div>
  );
}
