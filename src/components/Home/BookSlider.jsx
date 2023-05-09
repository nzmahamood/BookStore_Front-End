import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { data } from '../../utils/books'
import BookCardComp from './BookCardComp'
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import { BASE_URL_NET } from '../../utils/domains';




function PrevArrow(props) {
    const { onClick } = props;
    return(<ChevronLeftIcon 
        onClick={onClick}
        className={`lg:shadow lg:hover:shadow-md h-9 w-9 text-gray-500 hover:cursor-pointer  left-[-39px] md:left[-50px] absolute top-[50%] block`}
         />)
}

function NextArrow(props) {
    const { onClick } = props;
    return(<ChevronRightIcon 
        onClick={onClick}
        className={`lg:shadow lg:hover:shadow-md h-9 w-9 text-gray-500 hover:cursor-pointer block absolute right-[-10px] md:right-[-50px] top-[50%]`}
    />)
}

const BookSlider = ({book, code}) => {


    const settings = {
        infinite: false,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 5,
        pauseOnHover: true,
        initialSlide:0,
        centerMode:false,
        variableWidth:false,
        lazyLoad: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                centerMode:false,
              }
            },
            {
              breakpoint: 925,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                initialSlide: 2,
                centerMode:false
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  centerMode:false,
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode:false,
                infinite:true
              }
            },
            {
                breakpoint: 300,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode:true,
                  infinite:true,
                  variableWidth:true
                }
              }
          ]
        }
  return (
    <Slider {...settings} className='flex justify-center gap-4 ml-7 md:ml-5'>
        {book.map((books) => <BookCardComp bookDetails={books} code={code}/>)}
    </Slider>
  )
}

export default BookSlider