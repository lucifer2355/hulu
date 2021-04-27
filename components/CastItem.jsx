import React from "react";
import Image from "next/image";

// import PersonAvatar from "../svg/person.svg";

const CastItem = ({ person }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <Image
        className='rounded-full'
        height={50}
        width={50}
        src={`${BASE_URL}${person.profile_path}`}
        onError={(e) => {
          console.log("error", e.target.src);
        }}
      />
    </>
  );
};

export default CastItem;
