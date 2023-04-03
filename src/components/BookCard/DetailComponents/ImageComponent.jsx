import React from 'react'

const ImageComponent = ({coverImg}) => {
  return (
    <div className='w-full md:w-[35%] flex items-center justify-center h-[375px]'>
        <img src={coverImg} alt='cover' className='max-h-[375px] rounded drop-shadow-lg'/>
    </div>
  )
}

export default ImageComponent