import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyBasket = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Typography variant='h5' className='font-inter text-slate-900'>Empty Cart</Typography>
        <Link to={`/home`}>
        <Button variant='contained' className='mt-9 font-inter bg-gradient-to-r from-teal-600 to-teal-900'>Keep Shopping</Button>
        </Link>
        
    </div>
  )
}

export default EmptyBasket