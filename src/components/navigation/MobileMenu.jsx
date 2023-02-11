import React from 'react'

const MobileMenu = ({showMenu}) => {
  return (
    <div className={showMenu ? `flex flex-col absolute left-0 z-50 float-left min-w-[10rem] w-full bg-white border-0 top-[200%]`: `hidden`}>
        <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-bold text-slate-700 text-sm tracking-wider'>Category 1</span>
        </div>
        <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-bold text-slate-700 text-sm tracking-wider'>Category 1</span>
        </div>
        <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-bold text-slate-700 text-sm tracking-wider'>Category 1</span>
        </div>
        <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-bold text-slate-700 text-sm tracking-wider'>Category 1</span>
        </div>
        <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-bold text-slate-700 text-sm tracking-wider'>Category 1</span>
        </div>
        
    </div>
  )
}

export default MobileMenu