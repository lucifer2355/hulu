import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const CastItem = ({ person }) => {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className='cursor-pointer'
      onClick={() => router.push(`/person/${person.id}`)}
    >
      <Image
        className='rounded-full'
        height={50}
        width={50}
        src={`${BASE_URL}${person.profile_path}`}
        onError={(e) => {
          e.target.src = "../svg/person.svg";
        }}
      />
    </div>
  );
};

export default CastItem;
