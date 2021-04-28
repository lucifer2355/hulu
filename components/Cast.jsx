import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CastItem from "./CastItem";

const Cast = ({ cast }) => {
  return (
    <div className='pr-5 mt-2'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='container-container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass='carousel-item-padding-100-px'
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 10,
            partialVisibilityGutter: 5,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 5,
            partialVisibilityGutter: 5,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 6,
            partialVisibilityGutter: 5,
          },
        }}
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {cast.map((person) => (
          <CastItem key={person.id} person={person} />
        ))}
      </Carousel>
    </div>
  );
};

export default Cast;
