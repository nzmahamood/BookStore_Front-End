import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import BookSliderComponent from './BookSliderComponent'

const BookList = ({category, data}) => {
  return (
    <Container maxWidth='xl' className='flex flex-col border border-[silver] rounded-md py-3 relative top-5'>
        <Box className='w-full h-[50px] md:h-[92px] border-b border-[silver] flex items-center justify-between' >
            <Typography variant='h4' className='font-inter text-[14px] md:text-[24px] font-semibold text-slate-900 tracking-wider '>{category}</Typography>
            <Button variant='contained' size='small' href='#button' className='bg-gradient-to-r from-teal-600 to-teal-900 font-inter tracking-wider'>View More</Button>
        </Box>
        <BookSliderComponent books={data} />
    </Container>
  )
}

export default BookList