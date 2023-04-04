import { Box, Button, Container } from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem'
import { useSelector } from 'react-redux'

const BasketContainer = () => {
    const items = useSelector(state => state.basket)
  return (
    <Container maxWidth='lg' className='relative top-5 flex flex-col'>
        {/* title */}
        <Box className='w-full h-[50px] md:h-[52px] flex justify-center'>
            <h2 className='text-slate-900 font-inter tracking-wider text-[29px] md:text-[32px] xl:text-[39px] font-medium'>Shopping Basket</h2>
        </Box>
        <div className='w-full p-2 flex justify-center md:justify-end'>
            <Button variant='contained' size='medium' className='bg-teal-700 md:w-[300px]'>Checkout <span>| (Total: $99.99)</span></Button>
        </div>
        
        <ul className='w-full md:flex pb-4 border-b border-[silver] font-inter font-medium tracking-wide text-slate-900 hidden'>
            <li className='basis-[64%] max-w-[64%]'>Item</li>
            <li className='basis-[16%] max-w-[16%] text-center'>Qty</li>
            <li className='basis-[16%] max-w-[16%] text-center'>Price</li>
        </ul>
        
        {items.map(item => <BasketItem item={item} />)}
    </Container>
  )
}

export default BasketContainer