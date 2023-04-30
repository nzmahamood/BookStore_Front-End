import React from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ListBox from './ListBox'
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import CustomPaginator from './CustomPaginator';

const FiltersPaginations = ({data, paginations, currentPage}) => {
  const totalPages = Math.ceil(data?.length / 14)
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
}
  return (
    <div className='hidden md:flex w-full h-[64px] items-center border-b border-slate-700 absolute top-[64px] justify-between'>
      <div className='flex items-center justify-center h-full w-auto'>
        <h5 className='font-inter font-medium text-lg text-slate-900'><span className='text-teal-700'>999</span> Results</h5>
      </div>
      <div className='flex items-center justify-center h-full w-auto'>
        {/* <h5 className='font-inter font-medium text-lg text-slate-900'><span className='text-slate-900 font-semibold'>Sort |</span> Popular</h5>
        <ChevronDownIcon className='w-4 h-4 ml-3' /> */}
        <ListBox type={"Sort By"} />
      </div>
      <div className='flex items-center justify-center h-full w-auto'>
        {/* <h5 className='font-inter font-medium text-lg text-slate-900'><span className='text-slate-900 font-semibold'>Category |</span> All</h5>
        <ChevronDownIcon className='w-4 h-4 ml-3' /> */}
        <ListBox type={"Category"} data={data}/>
      </div>
      <div className='flex items-center justify-center h-full w-auto'>
        {/* pagination numbers */}
      <div className='flex gap-3 items-center'>
        {/* {pageNumbers.map((page) => (
          <p className={`hover:cursor-pointer font-inter font-medium text-lg text-slate-900 ${
            page === currentPage ? 'underline' : ''
        }`} onClick={() => paginations(page)}>{page}</p>
        ))} */}
         {/* renderItem={(item) => (
          <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item} */}
        <CustomPaginator totalPages={totalPages} currentPage={currentPage} pagination={paginations}/>
          {/* <p className='hover:cursor-pointer font-inter font-medium text-lg text-slate-900'>2</p>
          <p className='hover:cursor-pointer font-inter font-medium text-lg text-slate-900'>3</p>
          <p className='hover:cursor-pointer font-inter font-medium text-lg text-slate-900'>4</p>
          <p className='hover:cursor-pointer font-inter font-medium text-lg text-slate-900'>5</p> */}
          {/* <ChevronRightIcon className='w-4 h-4 hover:cursor-pointer' /> */}
        </div>
      </div>
    </div>
  )
}

export default FiltersPaginations