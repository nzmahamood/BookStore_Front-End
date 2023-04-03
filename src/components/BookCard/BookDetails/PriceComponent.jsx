import React, { useState } from 'react'

const PriceComponent = ({price}) => {
    const oldPrice = Math.floor(price * 0.8)
  return (
    <div className='md:mt-10 flex items-center justify-center md:justify-start w-full h-10 md:h-20 font-inter'>
        {/* old price */}
        <div className='flex items-center justify-center w-[92px] md:w-[150px] h-full border border-red-700 rounded-sm text-red-500 line-through'>
            <span className='font-bold text-lg'>£</span>
            <span className='font-semibold text-lg pl-2'>{oldPrice}</span>
        </div>
        {/* new price */}
        <div className='flex items-center justify-center w-[92px] md:w-[150px] h-full border border-teal-700 rounded-sm text-teal-700 ml-5'>
            <span className='font-bold text-lg'>£</span>
            <span className='font-semibold text-lg pl-2'>{price}</span>
        </div>
    </div>
  )
}

export default PriceComponent