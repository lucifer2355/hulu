import React from "react";
import Stars from "react-rating";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline";
import { StarIcon as SolidStartIcon } from "@heroicons/react/solid";

const Rating = ({ rating }) => {
  return (
    <div className='mt-5 pl-10'>
      <Stars
        emptySymbol={<OutlineStarIcon className='h-5' />}
        fullSymbol={<SolidStartIcon className='h-5' />}
        initialRating={rating}
        readonly
      />
    </div>
  );
};

export default Rating;
