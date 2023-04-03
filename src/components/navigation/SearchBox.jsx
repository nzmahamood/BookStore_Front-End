import React from 'react'
import SearchFilter from './SearchFilter'

const SearchBox = ({handleSearch, handleSearchChange}) => {
  return (
    <div className='flex w-[85%] h-9 bg-white border border-slate-500 rounded relative'>
                {/* filter */}
                <SearchFilter />
                {/* <select className='text-sm font-inter text-slate-900 flex items-center justify-center w-[10%] h-full px-2 border-r border-slate-600 focus:outline-none hover:outline-none rounded-tl rounded-bl'>
                    <option className='text-sm' value="volvo">Volvo</option>
                    <option className='text-sm' value="saab">Saab</option>
                    <option className='text-sm' value="opel">Opel</option>
                    <option className='text-sm' value="audi">Audi</option>
                    //  <span className='font-inter text-xs px-1'>All</span>
                    // <ChevronDownIcon className='h-4 text-slate-900'/>
                </select> */}
                {/* search input */}
                <form className='flex h-full w-full' onSubmit={handleSearch}>
                    <input type='search' onChange={handleSearchChange} className='w-[85%] h-full font-inter text-sm pl-3 focus:outline-none' placeholder='Search Books, ISBN, Authors etc...'/>
                    <button type='submit' className='w-[15%] h-full rounded-l bg-teal-600 flex justify-center items-center'>
                    <svg className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className='fill-slate-50' d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path className='fill-slate-50' d="m20.71 19.29-3.4-3.39a7.92 7.92 0 0 0 1.69-4.9 8 8 0 1 0 -8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-15.71-8.29a6 6 0 1 1 6 6 6 6 0 0 1 -6-6z" fill="#231f20"/></svg>
                    </button>
                </form>
            </div>
  )
}

export default SearchBox