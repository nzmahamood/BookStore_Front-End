import { Rating, Typography } from '@mui/material'
import React from 'react'

const RatingComp = ({value, count}) => {
  return (
    <div className='flex items-center'>
        <span className='hidden md:block'>Rating</span>
        <Rating size='small' value={value} name='read-only' precision={0.5} className='px-1' />
        <span className='hidden md:block'>({count})</span>
    </div>
    
  )
}

export default RatingComp