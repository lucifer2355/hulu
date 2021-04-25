import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

const NextArrow = ({ onClick }) => {
  return <ChevronRightIcon />;
};

const PrevArrow = ({ onClick }) => {
  return <ChevronLeftIcon />;
};

const Cast = ({ cast }) => {
  const [totalShow, setTotalShow] = useState(null);

  const changeTotalShow = () => {
    let totalItems = Math.round(sliderElement.current.offsetWidth / 70);
    if (totalItems > cast.length) {
      totalItems = cast.length;
    }
    setTotalShow(totalItems);
  };

  // const items =

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: totalShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return <div>{/* <Slider {...settings}>{item}</Slider> */}</div>;
};

export default Cast;
