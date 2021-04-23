import React from "react";
import Image from "next/image";

const MoviePoster = ({ posterImageURL }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='flex justify-center mt-10'>
      <Image width={300} height={450} src={`${BASE_URL}${posterImageURL}`} />
    </div>
  );
};

export default MoviePoster;
