import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieWebLinks = ({ title, Icon, isImage = false, link }) => {
  const router = useRouter();

  return (
    <div
      className='flex pt-2 pl-4 pr-4 pb-2 items-center justify-center border w-28 rounded-2xl hover:bg-white hover:text-black cursor-pointer transition transform hover:-translate-y-1'
      onClick={() => window.open(link, "_blank").focus()}
    >
      <h2 className='text-sm'>{title}</h2>
      {!isImage && <Icon className='h-3 pl-1' />}
      {isImage && (
        <Image
          height={15}
          width={15}
          src='https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.pngå'
          className='pl-2'
        />
      )}
    </div>
  );
};

export default MovieWebLinks;
