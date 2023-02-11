import React from 'react'
import BookCard from './BookCard'
import BookCardComp from './BookCardComp'
import BookSlider from './BookSlider'

const BookContainer = ({categoryName, books}) => {
  return (
    <div className='relative top-10 w-full h-[500px] flex flex-col items-center'>
        {/* header (title and view more button) */}
        <div className='w-full h-[50px] md:h-[109px] flex items-center border-b border-slate-900 py-3'>
            <div className='float-left h-auto font-inter font-semibold text-slate-900 text-[14px] md:text-[24px] pl-1 md:pl-3'><span>{categoryName}</span></div>
            <div className='float-right h-auto absolute right-0 flex items-center pr-2'>
                <button className='bg-teal-700 text-white font-inter font-regular text-xs p-2 md:text-[16px] w-[102px] md:w-[121px] rounded'>View More</button>
            </div>
        </div>
        {/* BookContainer */}
        <div className='w-[92%] md:w-[90%] h-[325px] md:h-[375px] relative top-3'>
            {/* books are loaded from API through looping */}
            <BookSlider book={books}/>
        </div>
    </div>
  )
}

export default BookContainer