import React from 'react'

const MobileMenu = ({showMenu}) => {
    const categories = [
        {name: 'Food & Drinks'},
        {name: 'Medical'},
        {name: 'Fiction'},
        {name: 'Non-Fiction'},
        {name: 'Most-Popular'},
        {name: 'New Releases'},

    ]
  return (
    <div className={showMenu ? `mobile-menu bg-white top-[200%] animate-menu`: `mobile-menu bg-white top-[-376px] menu-close`}>
        <ul className='flex flex-col items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            {categories.map((category) => (
                <li className='w-full min-h-[54px] border-b-2 border-double border-emerald-700 flex items-center justify-center font-inter font-semibold tracking-wide text-sm'>{category.name}</li>
            ))}
        </ul>
        {/* <div className='flex items-center justify-center min-h-[54px] w-full border-b-2 border-double border-emerald-700'>
            <span className='font-inter font-semibold tracking-wide px-[2rem] text-sm'>Category 1</span>
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
        </div> */}
        
    </div>
  )
}

export default MobileMenu