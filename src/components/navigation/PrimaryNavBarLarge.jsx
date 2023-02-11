import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
const PrimaryNavBarLarge = () => {
  return (
    <nav className='relative hidden md:flex bg-gradient-to-r from-teal-600 to-teal-900 h-[72px] w-full border-b border-slate-600'>
        {/* logo box */}
        <div className='flex w-[15%] items-center justify-end hover:cursor-pointer'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </div>
        {/* search box */}
        <div className='flex w-[75%] items-center justify-center'>
            <div className='flex w-[85%] h-9 bg-white border border-slate-500 rounded'>
                {/* filter */}
                <div className='flex items-center justify-center w-[10%] h-full px-2 border-r border-slate-600'>
                    <span className='font-inter text-xs px-1'>All</span>
                    <ChevronDownIcon className='h-4 text-slate-900'/>
                </div>
                {/* search input */}
                <form className='flex h-full w-full'>
                    <input type='search' className='w-[85%] h-full pl-3 focus:outline-none' placeholder='Search Books, ISBN, Authors etc...'/>
                    <button type='submit' className='w-[15%] h-full rounded-l bg-teal-600 flex justify-center items-center'>
                    <svg className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className='fill-slate-50' d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path className='fill-slate-50' d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z" fill="#231f20"/></svg>
                    </button>
                </form>
            </div>
        </div>
        <div className='flex items-center justify-start h-full w-[10%]'>
        <svg className='h-6 fill-slate-50 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect className='fill-slate-50' width="32" height="128" x="120" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="200" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="280" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="360" y="304" fill="#f8fafc" class="ci-primary"/>
                <path className='fill-slate-50' fill="#f8fafc" d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z" class="ci-primary"/>
            </svg>
        </div>
    </nav>
  )
}

export default PrimaryNavBarLarge