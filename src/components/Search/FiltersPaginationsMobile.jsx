import React from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ListBox from './ListBox'
import CustomPaginator from './CustomPaginator'
const FiltersPaginationsMobile = ({data, paginations, currentPage}) => {

  const totalPages = Math.ceil(data?.length / 14)
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
}
  return (
    <div className='block md:hidden h-[102px] relative top-16'>
      <div className='w-full h-[62px] md:h-[64px] flex items-center border-b border-slate-700 relative'>
        <div className='absolute left-0'>
          <h5 className='font-inter font-medium text-sm md:text-lg text-slate-900'><span className='text-teal-700'>{data?.length}</span> Results</h5>
        </div>
        
        <div className='absolute right-0 flex gap-3'>
        <CustomPaginator totalPages={totalPages} currentPage={currentPage} pagination={paginations}/>
          {/* <p className='hover:cursor-pointer font-inter font-medium text-sm md:text-lg text-slate-900 underline'>1</p>
          <p className='hover:cursor-pointer font-inter font-medium text-sm md:text-lg text-slate-900'>2</p>
          <p className='hover:cursor-pointer font-inter font-medium text-sm md:text-lg text-slate-900'>3</p>
          <p className='hover:cursor-pointer font-inter font-medium text-sm md:text-lg text-slate-900'>4</p>
          <p className='hover:cursor-pointer font-inter font-medium text-sm md:text-lg text-slate-900'>5</p>
          <ChevronRightIcon className='w-4 h-4' /> */}
        </div>
      </div>
      <div className='flex w-full h-10 relative border-b border-slate-700'>
        <div className='absolute left-0 flex items-center justify-center h-full w-[calc(100%/2)] border-r border-slate-700'>
          {/* <p className='text-sm font-inter font-medium text-slate-900'>Filters</p>
          <ChevronDownIcon className='h-4 w-4 ml-3'/> */}
          <ListBox type={"Filters"} data={data}/>
        </div>
        <div className='absolute right-0 flex items-center justify-center h-full w-[calc(100%/2)]'>
          {/* <p className='text-sm font-inter font-medium text-slate-900'>Sort By</p>
          <ChevronDownIcon className='h-4 w-4 ml-3'/> */}
          <ListBox type={"Sort By"} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default FiltersPaginationsMobile