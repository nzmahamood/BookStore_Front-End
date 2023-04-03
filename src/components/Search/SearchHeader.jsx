
import React from 'react'
import FiltersPaginations from './FiltersPaginations'
import FiltersPaginationsMobile from './FiltersPaginationsMobile'

const SearchHeader = ({search, data, pagination, currentPage}) => {
    
  return (
    <section className='w-full h-[164px] md:h-[128px] relative'>
    <div className='absolute top-0 w-full h-[62px] md:h-[64px] flex items-center md:border-b border-slate-700'>
        <h4 className='font-inter font-semibold text-[22px] md:text-[25px]'>Search Results for "{search}" </h4>
    </div>
    <FiltersPaginationsMobile data={data} paginations={pagination} currentPage={currentPage}/>
    <FiltersPaginations data={data} paginations={pagination} currentPage={currentPage}/>
    </section>
  )
}

export default SearchHeader