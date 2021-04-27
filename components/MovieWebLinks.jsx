import React from "react";

const MovieWebLinks = ({ title, Icon }) => {
  return (
    <div className='flex pt-2 pl-4 pr-4 pb-2 items-center justify-center border w-28 rounded-2xl hover:bg-white hover:text-black cursor-pointer'>
      <h2 className='text-sm'>{title}</h2>
      <Icon className='h-3 pl-1' />
    </div>
  );
};

export default MovieWebLinks;
