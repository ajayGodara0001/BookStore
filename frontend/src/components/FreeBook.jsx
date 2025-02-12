import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Card from "./Card";
function FreeBook() {
    const freebook = list.filter((l) => l.category === "Free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
  <>
    <div className='px-4 md:px-16'>
    <div className='mt-5 '><h1 className='font-bold text-3xl'>Free Offered Course</h1>
    <p className='text-xl'>Lorem ipsum sa. Praesentium non  aliquammaxime dolor deleimilique, aut quisaliquammaxime dolor deleimilique, aut quisaliq quisaliquammaxime dolor deleimilique, aut quisquam?</p></div>
    <div>
    <div className="slider-container mt-5 ">
      <Slider {...settings}>
         {
        freebook.map((item) => (
                <Card item={item} key={item.id} />
            ))
         }
      </Slider>
    </div>
    </div>
    </div>
  </>
  )
}

export default FreeBook
