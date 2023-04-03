import React, { useState, useEffect } from 'react';


const BookImage = ({ bookImg }) => {


  return (
    <div className='w-[230px] h-[375px] md:w-[250px] md:h-[400px] shadow-lg rounded'>
        <img
          src={bookImg}
          alt='bookimage'
          className='object-fill h-full w-full rounded-sm'
        />
    </div>
  );
};

export default BookImage;