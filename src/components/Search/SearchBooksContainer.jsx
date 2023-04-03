import React, { useState } from 'react'
import BookCardComp from '../Home/BookCardComp'
// basis-[50%] md:basis-[33%] lg:basis-[20%] xl:basis-[16%]
const SearchBooksContainer = ({data}) => {
  return (
    <div className='flex flex-wrap w-full relative top-5 px-3'>
         {data.map((books) => (
          <div className='book-col-xs min-[350px]:book-col-sm min-[625px]:book-col-md min-[1005px]:book-col-reg min-[1500px]:book-col-lg flex justify-center mb-6'>
              <BookCardComp bookDetails={books} />
          </div>
      ))}
    </div>
  )
}

export default SearchBooksContainer