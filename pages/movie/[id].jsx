import React from "react";

const Movie = ({ results }) => {
  console.log(results);

  return (
    <div>
      <h1>Movie Details</h1>
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
