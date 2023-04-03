import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
const BookCardComponent = ({data}) => {
  return (
    <Paper elevation={8} className='w-[132px] h-[315px] md:w-[162px] md:h-[362px] p-1 relative flex flex-col'>
        <Box className='w-full h-[195px] md:h-[235px] flex justify-center'>
            <img src={data.thumbnail} alt={data.id} className='object-contain h-full'/>
        </Box>
        <Box className='h-[120px] md:h-[127px] flex flex-col w-full text-center px-1'>
            {/* title */}
            <div className='w-full max-h-11 overflow-hidden flex-1'>
                <Typography variant='p' className='text-slate-900 font-inter font-medium'>{data.title}</Typography>
            </div>
        </Box>
    </Paper>
  )
}

export default BookCardComponent