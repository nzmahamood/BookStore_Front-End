import { Box, Typography } from '@mui/material'
import React from 'react'

const PriceComp = ({price}) => {
  return (
    <div className='w-full flex justify-center gap-3 md:justify-start mt-3 md:mt-6'>
        <Box className='w-16 h-10 md:w-32 md:h-16 flex items-center justify-center p-2 border border-red-600 rounded-sm'>
            <Typography className='text-red-600 font-semibold line-through'>$ {price}</Typography>
        </Box>
        <Box className='w-16 h-10 md:w-32 md:h-16 flex items-center justify-center p-2 border border-teal-700 rounded-sm'>
            <Typography className='text-teal-700 font-semibold'>$ {price}</Typography>
        </Box>
    </div>
  )
}

export default PriceComp