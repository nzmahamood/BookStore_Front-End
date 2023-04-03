import React from 'react'
import RatingComp from './RatingComp'

const TitleAndAuthorComponent = ({title, authors, rating, rateCount}) => {
  return (
    <div className='flex flex-col border-b border-[silver] pb-3'>
        {/* title */}
        <div className='w-full flex items-center max-h-[75px] md:max-h-[62px] py-2'>
            <h3 className='font-semibold text-slate-900 text-[22px]'>{title && title}</h3>
        </div>
        <div className='w-full flex justify-between max-h-[62px] font-medium text-[12px]'>
            <h5 className='text-slate-900'>{authors && authors} <span className='hidden md:inline text-slate-600'>| author(s)</span></h5>
            <RatingComp value={rating} count={rateCount}/>
        </div>
    </div>
  )
}

export default TitleAndAuthorComponent