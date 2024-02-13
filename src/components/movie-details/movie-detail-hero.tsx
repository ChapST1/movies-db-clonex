import type {MovieDetail} from "@/types";

import {generateFullPath} from "@/lib/create-poster";

import {MovieHeroPicture} from "./movie-hero/movie-hero-picture";
import {MovieHeroInfo} from "./movie-hero/movie-hero-info";
import {MovieHeroInfoGenders} from "./movie-hero/movie-hero-info-genders";
import {MovieHeroInfoHeader} from "./movie-hero/movie-hero-info-header";
import {MovieHeroInfoFooter} from "./movie-hero/movie-hero-info-footer";
import {MovieHeroUserScore} from "./movie-hero/movie-hero-user-score";
import {MovieHeroInfoOverview} from "./movie-hero/movie-hero-info-overview";

export function MovieDetailHero({movieDetail}: {movieDetail: MovieDetail}) {
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    genres,
    original_title,
    adult,
    release_date,
    runtime,
    vote_average,
    status,
    tagline,
  } = movieDetail;

  const backdropPath = generateFullPath({backdrop: {path: backdrop_path, size: "w1280"}});
  const posterPath = generateFullPath({poster: {path: poster_path, size: "w342"}});
  const year = new Date(release_date).getFullYear();

  return (
    <section
      className="mt-4 grid h-[600px] w-full grid-cols-[400px,1fr]"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), 80%, rgba(0, 0, 255, 0.057)), url("${backdropPath}")`,
        backgroundSize: "cover",
      }}
    >
      <MovieHeroPicture posterPath={`${posterPath}`} title={title} />

      <MovieHeroInfo>
        <MovieHeroInfoHeader
          original_title={original_title}
          runtime={runtime}
          status={status}
          year={`${year}`}
        />
        <MovieHeroInfoGenders genres={genres} />
        <MovieHeroUserScore vote_average={vote_average} />
        <MovieHeroInfoOverview overview={overview} tagline={tagline} />
        <MovieHeroInfoFooter adult={adult} />
      </MovieHeroInfo>
    </section>
  );
}

// MMmmmmm http://localhost:3000/movies/63770
//https://tmdb-clone-react.netlify.app/movie/63770