import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";

const Genres = ({ genres }) => {
  return (
    <div className='flex space-x-4 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide mt-2'>
      {genres.map((genre) => (
        <div
          key={genre.id}
          className='flex items-center transition transform hover:-translate-y-0.5  cursor-pointer'
        >
          <XCircleIcon className='h-2 mr-1' />
          <h2 className='text-sm'>{genre.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Genres;
