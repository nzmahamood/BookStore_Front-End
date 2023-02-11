import React from 'react'

const SecondaryNavBar = () => {
  return (
    <nav className='hidden md:flex items-center justify-center w-full h-11 bg-white shadow'>
      <ul className='flex items-center justify-center w-[75%] h-full'>
        <li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem] text-slate-500'>Category 1</li>
        <li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem] text-slate-500'>Category 1</li>
        <li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem] text-slate-500'>Category 1</li>
        <li className='h-full flex justify-center items-center hover:border-r-2 border-slate-700 hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 font-inter font-semibold tracking-wide text-[14px] px-[2rem] text-slate-500'>Category 1</li>
        <li className='h-full flex justify-center items-center hover:border-l-2 font-inter font-semibold hover:cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-500 tracking-wide text-[14px] px-[2rem] text-slate-500'>Category 1</li>

      </ul>
    </nav>
  )
}

export default SecondaryNavBar