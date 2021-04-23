import React from "react";

import MoviePoster from "../../components/MoviePoster";

const Movie = ({ results }) => {
  console.log(results);

  return (
    <div>
      <MoviePoster posterImageURL={results.poster_path} />

      <div className='pl-10 mt-10'>
        <p className='text-2xl text-white font-serif'>{results.title}</p>
        <p className='text-sm text-gray-300 font-normal'>{results.tagline}</p>
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

  return {
    props: {
      results: request,
    },
  };
}
