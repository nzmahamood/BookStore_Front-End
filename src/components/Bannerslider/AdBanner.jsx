import React from 'react'
import Slider from 'react-slick'
import { banners } from './image'


const AdBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
      }

  return (
    <Slider {...settings} className='max-w-full h-[300px] flex items-center justify-center mt-5'>
    { banners.map(banner => (
        !banner.isMobile && <div key={banner.id} className='w-full h-full px-1 hover:cursor-pointer'>
        <img src={banner.image} alt={`Banner ${banner.id}`} className='w-full h-[300px] rounded'/>
        
    </div>
    ))}
  </Slider>
  )
}

export default AdBanner