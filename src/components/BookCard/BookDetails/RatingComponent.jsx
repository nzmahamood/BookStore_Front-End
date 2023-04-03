import React from 'react'
import Rating from '@mui/material/Rating';
const RatingComponent = ({rating, count}) => {
    const ratingRounded = Math.round(rating * 2) / 2

    const ratingIcon = []

    for (let i = 0; i < 5; i++){
        if(ratingRounded >= i+1){
            ratingIcon.push(<Rating name='read-only' value={i} />)
        }else if(ratingRounded >= i+0.5){
            ratingIcon.push(<Rating name='half-rating-read' value={i} />)
        }else{
            ratingIcon.push(<Rating name='no-value' value={i} />)
        }
    }
  return (
    <div className='w-[50%] h-full flex items-center justify-end md:px-3 relative font-inter text-[10px]'>
        <span className='md:pr-2'>Rating</span>
        <Rating name="read-only" value={ratingRounded} readOnly precision={0.5} size='small' className='px-1'/>
        <span className='text-slate-500'>({count})</span>
    </div>
  )
}

export default RatingComponent