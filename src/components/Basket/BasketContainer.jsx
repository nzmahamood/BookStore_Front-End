import { Box, Button, Container } from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem'
import { useSelector } from 'react-redux'
import OrderSummary from './OrderSummary'

const BasketContainer = () => {
    const items = useSelector(state => state.basket)

    const subTotal = () => {
        let total = 0;

        items.forEach(item => {
            const itemPrice = parseFloat(item.average_rating)
            const itemQuantity = parseInt(item.quantity)
            const itemTotalPrice = itemPrice * itemQuantity
            total += itemTotalPrice
          })
        
          return total.toFixed(2)
    }
    let discount = 10;
    const grandTotal = (subTotal() - discount).toFixed(2)
  return (
    <Container maxWidth='lg' className='relative top-5 flex flex-col'>
        {/* title */}
        <Box className='w-full h-[50px] md:h-[52px] flex justify-center'>
            <h2 className='text-slate-900 font-inter tracking-wider text-[29px] md:text-[32px] xl:text-[39px] font-medium'>Shopping Basket</h2>
        </Box>
        <div className='w-full p-2 flex justify-center md:justify-end'>
            <Button variant='contained' size='medium' className='hidden md:block capitalize text-sm bg-teal-700 md:w-[300px]'>Checkout <span>| (Total: ${grandTotal})</span></Button>
        </div>
        
        <ul className='w-full md:flex pb-4 mb-3 border-b border-[silver] font-inter font-medium tracking-wide text-slate-900 hidden'>
            <li className='basis-[64%] max-w-[64%]'>Item</li>
            <li className='basis-[16%] max-w-[16%] text-center'>Qty</li>
            <li className='basis-[16%] max-w-[16%] text-center'>Price</li>
            <li className='basis-[16%] max-w-[16%] text-center'>Total Price</li>
        </ul>
        {items.map(item => <BasketItem item={item} />)}
        <OrderSummary subTotal={subTotal()} discount={discount} grandTotal={grandTotal}/>
        
    </Container>
  )
}

export default BasketContainer