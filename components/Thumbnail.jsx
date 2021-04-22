import React from "react";
import Image from "next/image";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Image
        layout='responsive'
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
    </div>
  );
};

export default Thumbnail;
