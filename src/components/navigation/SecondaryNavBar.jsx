import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryNavBar = () => {
  return (
    <nav className='hidden md:flex items-center justify-center w-full h-11 bg-white drop-shadow'>
      <ul className='flex items-center justify-center w-[75%] h-full text-slate-900'>
        
        <Link to={`search/fiction?isSection=true`}><li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem]'>Fiction</li></Link>
        <Link to={`search/nonfiction?isSection=true`}><li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem]'>Non-Fiction</li></Link>
        <Link to={`search/newreleases?isSection=true`}><li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem]'>New Releases</li></Link>
        <Link to={`search/popular?isSection=true`}><li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem]'>Most Popular</li></Link>
        <Link to={`search/fiction?isSection=true`}><li className='h-full flex justify-center items-center hover:border-l-2 font-inter font-semibold hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 tracking-wide text-[14px] px-[2rem]'>Food & Drinks</li></Link>

      </ul>
    </nav>
  )
}

export default SecondaryNavBar