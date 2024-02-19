import type {Person} from "@/types";

import {Suspense} from "react";

import {PersonContentMovies} from "./person-content-movies";
import {PersonContentImages} from "./person-content-images";

export function PersonContent({person}: {person: Person}) {
  const {name, biography, id} = person;

  return (
    <div>
      <h1 className="py-2 text-4xl font-semibold">{name}</h1>
      <p className="w-[80%] text-pretty">{biography}</p>

      <Suspense fallback={<p>Loading...</p>}>
        <PersonContentMovies id={id} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <PersonContentImages id={id} owner={name} />
      </Suspense>
    </div>
  );
}
