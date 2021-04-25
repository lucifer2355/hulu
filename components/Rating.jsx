import React from "react";
import Stars from "react-rating";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline";
import { StarIcon as SolidStartIcon } from "@heroicons/react/solid";

const Rating = ({ rating }) => {
  return (
    <Stars
      emptySymbol={<OutlineStarIcon className='h-4' />}
      fullSymbol={<SolidStartIcon className='h-4' />}
      initialRating={rating}
      readonly
    />
  );
};

export default Rating;
