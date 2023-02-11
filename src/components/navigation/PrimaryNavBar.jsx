import React from 'react'
import { Bars3Icon, HeartIcon, ChevronDownIcon  } from "@heroicons/react/24/outline"
import AccountMenu from './AccountMenu'
import MobileMenu from './MobileMenu'
import { useState } from 'react'


const PrimaryNavBar = () => {
    const logo = require('../../assets/book-reader.svg')
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='relative flex md:hidden flex-col bg-gradient-to-r from-teal-600 to-teal-900 h-[106px] w-ful'>
        {/* mobile primary navbar */}
        <div className='flex justify-between items-center w-full h-[54px] top-0 absolute'>
            <div className='h-[54px] w-[54px] flex items-center justify-center'>
                <Bars3Icon onClick={()=> setShowMenu(!showMenu)} className='h-7 text-slate-50' />
            </div>
            <MobileMenu showMenu={showMenu}/>
            <div className='h-[54px] w-[54px] flex items-center justify-center'>
                <HeartIcon className='h-7 text-slate-50' />
            </div>
            <div className='h-[54px] w-[161px] flex flex-col top-2 justify-center'>
            <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
            <h4 className='text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
            </div>
            <div className='h-[54px] w-[54px] flex items-center justify-center'>
            <svg className='h-6 fill-slate-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect className='fill-slate-50' width="32" height="128" x="120" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="200" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="280" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="360" y="304" fill="#f8fafc" class="ci-primary"/>
                <path className='fill-slate-50' fill="#f8fafc" d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z" class="ci-primary"/>
            </svg>
            </div>
            <div className='h-[54px] w-[54px] flex items-center justify-center'>
            {/* <svg className='h-7' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="m4 21v-4c0-1.1046.89543-2 2-2h12c1.1046 0 2 .8954 2 2v4"/></g></svg> */}
                <AccountMenu />
            </div>
        </div>
        {/* mobile search box */}
        <div className='h-[40px] w-full bg-white absolute bottom-0 flex flex-row justify-between border-b border-slate-300 rounded'>
            {/* filter */}
            <div className='filter flex items-center justify-center h-full w-[18.67%] border-r border-slate-500'>
                <span className='font-inter text-slate-700 font-medium'>All</span>
                <ChevronDownIcon className='pl-2 h-4 text-slate-900' />
            </div>
            {/* search input */}
            <div className='flex flex-row w-[81.33%] h-full'>
                <input className='w-[83.6%] h-full top-0 pl-3 focus: outline-none' placeholder='Search books, ISBN, author etc...' type='search' />
                <button className='h-full w-[16.39%] bg-teal-600 flex justify-center items-center rounded-l' type='submit'>
                    <svg className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className='fill-slate-50' d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path className='fill-slate-50' d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z" fill="#231f20"/></svg>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default PrimaryNavBar