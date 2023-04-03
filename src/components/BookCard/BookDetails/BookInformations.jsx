import React from 'react'
import ButtonComponent from './ButtonComponent'
import DescriptionComponent from './DescriptionComponent'
import PriceComponent from './PriceComponent'
import RatingComponent from './RatingComponent'

const BookInformations = ({bookInfo}) => {
  return (
    <div className='flex w-full h-full flex-col relative'>
        <div className='flex flex-col absolute top-0 md:top-10 w-full h-[132px] md:h-[124px] border-b border-[silver]'>
            <div className='w-full h-[75px] md:h-[62px] flex flex-wrap items-center font-inter font-semibold text-[22px] text-slate-900'>
                <h3>{bookInfo && bookInfo.title}</h3>
            </div>
            <div className='flex flex-grow items-center w-full font-inter font-medium text-[12px]'>
                <div className='w-[50%] h-full flex items-center'>
                <p>{bookInfo && bookInfo.authors} <span className='hidden md:block font-italic text-slate-500'>(authors)</span></p>
                </div>
                <RatingComponent rating={bookInfo.average_rating} count={bookInfo.ratings_count} />
            </div>
        </div>
        <div className='w-full flex flex-col md:h-[579px] relative top-[139px] md:top-[165px]'>
          
          <PriceComponent price={bookInfo.average_rating} />
          <ButtonComponent />
          <DescriptionComponent description={bookInfo.description}/>
          <div className='w-full flex justify-center items-center'>
            Description
          </div>
        </div>
        
        
    </div>
  )
}

export default BookInformations