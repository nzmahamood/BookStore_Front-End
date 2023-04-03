import { Container } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import BookCardComponent from '../BookCardComponent'

const BookSliderComponent = ({books}) => {
    function NextArrow(props){
        return
    }

    function PrevArrow(props){
        return
    }
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
    <Container className='mt-3'>
        <Slider {...settings} className='p-1'>
            {books.map((book) => (
                <BookCardComponent data={book} />
            ))}
        </Slider>
    </Container>
    
  )
}

export default BookSliderComponent