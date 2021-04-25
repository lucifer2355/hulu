import React from "react";

import MoviePoster from "../../components/MoviePoster";
import Rating from "../../components/Rating";
import Genres from "../../components/Genres";
import Cast from "../../components/Cast";

const Movie = ({ results, cast }) => {
  console.log(cast);

  return (
    <div>
      <MoviePoster posterImageURL={results.poster_path} />

      <div className='pl-10  mt-10'>
        <p className='text-2xl text-white font-serif'>{results.title}</p>
        <p className='text-sm text-gray-300 font-normal'>{results.tagline}</p>
      </div>

      <div className='flex mt-4 pl-10 pr-10 justify-between'>
        <div className='flex'>
          <Rating rating={results.vote_average / 2} />
          <h5 className='pl-2 text-sm'>{results.vote_average}</h5>
        </div>

        <p className='text-sm'>
          {results.spoken_languages[0].name} / {results.runtime} MIN./{" "}
          {results.release_date.split("-")[0]}
        </p>
      </div>

      <div className='mt-6 pl-10'>
        <h2 className='text-sm font-serif font-bold'>THE GENRES</h2>
        <Genres genres={results.genres} />
      </div>

      <div className='mt-6 pl-10'>
        <h2 className='text-sm font-serif font-bold'>THE SYNOPSIS</h2>
        <p className='mt-1 text-sm pr-5'>{results.overview}</p>
      </div>

      <div>
        <Cast />
      </div>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  const cast = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
      cast,
    },
  };
}
