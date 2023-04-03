import { Button } from '@mui/material'
import React from 'react'
import { Basket } from '../../../utils/svg'
import { HeartIcon } from "@heroicons/react/24/outline"

const ButtonComponent = () => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-2 md:gap-5 w-full h-10 mt-3 md:mt-16'>
        <button className='w-[90%] md:w-[194px] h-full p-3 flex bg-teal-700 border border-teal-700 rounded-md text-white text-sm font-semibold font-inter justify-center hover:bg-white hover:text-teal-700'>
            Add to Cart 
            <span className='pl-2'>
                <Basket height='h-5 text-teal-700' fill='fill-slate-50 hover:fill-slate-900'/>
            </span>
        </button>
        <button className='md:mr-3 w-[90%] md:w-[194px] h-full p-3 flex bg-white border border-teal-700 rounded-md text-black text-sm font-semibold font-inter justify-center hover:bg-teal-700 hover:text-white-'>
            Add to WishList 
            <span className='pl-2'>
                <HeartIcon className='w-4 h-4' />
            </span>
        </button>
        
    </div>
  )
}

export default ButtonComponent