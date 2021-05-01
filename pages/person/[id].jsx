import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

import MoviePoster from "../../components/MoviePoster";
import Results from "../../components/Results";

const Person = ({ results, getMovieCredits }) => {
  console.log(getMovieCredits);

  return (
    <>
      <div className='pl-10'>
        <MoviePoster posterImageURL={results.profile_path} />
        <h2 className='text-2xl font-serif mt-10  text-white font-bold'>
          {results.name}
        </h2>
        <h2 className='text-sm  mt-2 '>{results.birthday}</h2>

        <div className='mt-6  pr-5'>
          <h2 className='text-lg text-white font-bold'>THE BIOGRAPHY</h2>
          <p className='text-sm mt-2 text-justify'>{results.biography}</p>
        </div>

        <div
          className='flex items-center space-x-2 border w-24 rounded-2xl pl-5 pr-5 pt-1 pb-1 mt-5 cursor-pointer transition transform hover:-translate-y-1'
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className='h-3' />
          <h2>Back</h2>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='text-xl font-serif text-white leading-3'>
          ALSO ENTERS IN
        </h2>
        <span className='text-xs'>MOVIES</span>

        <Results results={getMovieCredits.results} />
      </div>
    </>
  );
};

export default Person;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const results = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  const getMovieCredits = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&with_cast=${id}`
  ).then((res) => res.json());

  return {
    props: {
      results,
      getMovieCredits,
    },
  };
}
