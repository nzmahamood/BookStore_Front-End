import React from 'react'
import Slider from 'react-slick'
import { banners } from './image'
import { Grid, Typography } from '@mui/material'


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

      const FirstBanner = () => {
        return(
          <>
            <Grid container className='w-full' spacing={5}>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b  from-blue-100 to-blue-200'>
                  <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b from-teal-100 to-teal-200'>
              <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b from-green-100 to-green-200'>
              <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
            </Grid>
          </>
        )
      }

      const SecondBanner = () => {
        return(
          <>
            <Grid container className='w-full' spacing={5}>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b  from-blue-100 to-blue-200'>
              <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b from-teal-100 to-teal-200'>
              <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
              <Grid item xs={4} className='h-[300px] bg-gradient-to-b from-green-100 to-green-200'>
              <div className='w-full h-full flex items-center justify-center'><Typography variant='h6' className='text-white'>SAVE10</Typography></div>
              </Grid>
            </Grid>
          </>
        )
      }

      const bannerArray = [
        {id: 0, element:<FirstBanner />},
        {id: 1, element:<SecondBanner />},
      ]

  return (
    <Slider {...settings} className='max-w-full h-[300px] flex items-center justify-center mt-5'>
    {/* { banners.map(banner => (
        !banner.isMobile && <div key={banner.id} className='w-full h-full px-1 hover:cursor-pointer'>
        <img src={banner.image} alt={`Banner ${banner.id}`} className='w-full h-[300px] rounded'/>
        
    </div>
    ))} */}

    {bannerArray.map(banner => <div key={banner?.id} className='w-full h-full px-1 hover:cursor-pointer'>
      {banner?.element}
    </div>)}
  </Slider>
  )
}

export default AdBanner