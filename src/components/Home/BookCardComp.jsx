import React from 'react'
import { HeartIcon } from "@heroicons/react/24/outline"
import { Basket } from '../../utils/svg'

const BookCardComp = ({bookDetails}) => {
    const book = require('../../utils/book.jpg')
  return (
    <div className='w-[132px] h-[315px] md:w-[162px] md:h-[362px] shadow-lg flex flex-col mt-3 bg-slate-100 rounded'>
        
        {/* div for book cover image */}
        <div className='w-full h-[195px] md:h-[235px] flex justify-center relative'>
            
            <img src={bookDetails.image} alt='book_cover' className='w-[128px] h-[195px] md:w-[150px] md:h-[235px] rounded-sm'/>
            {/* div for promotion */}
            <div className='w-[75%] h-3 md:h-5 bg-gradient-to-r from-orange-400 to-orange-600 absolute top-[-2.5%] rounded-bl-md rounded-tr-md flex items-center justify-center'>
                <span className='text-[9px] md:text-[11px] font-inter text-slate-50'>Buy 2 Get 1 Free</span>
            </div>

        </div>
        {/* div for book details */}
        <div className='w-full max-w-[132px] md:max-w-[162px] min-w-0 h-[120px] md:h-[127px] flex flex-col'>
            {/* title of book */}
            <div className='min-w-0 w-[132px] md:w-[162px] h-8 flex justify-center items-center truncate px-2'>
                <span  className='min-w-0 text-[16px] font-inter font-semibold text-slate-900 text-center truncate'>{bookDetails.name}</span>
            </div>
            {/* author of book */}
            <div className='w-full h-4 flex justify-center px-2'>
                <span className='font-inter font-regular text-slate-600 font-italic text-sm truncate'>{bookDetails.author}</span>
            </div>
            {/* book price */}
            <div className='w-full h-5 flex justify-center mt-1 md:mt-3'>
                <span className='font-inter font-bold text-teal-700 text-[17px]'><span className='text-slate-700'>$ </span>{bookDetails.price}</span>
            </div>
            {/* buttons */}
            <div className='w-full h-[46px] flex justify-between items-end relative bottom-0 px-1'>
                <button className='p-1 w-9 h-8 text-slate-600 bg-slate-300 rounded-md flex items-center justify-center'>
                    <HeartIcon className='w-6'/>
                </button>
                <button className='p-1 w-9 h-8 bg-teal-700 text-white rounded-md flex items-center justify-center'><Basket height='h-5'></Basket></button>
            </div>
        </div>
    </div>
  )
}

export default BookCardComp