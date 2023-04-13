import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import CheckoutGoogle from './CheckoutGoogle'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { grandTotalReducer } from '../../contexts/store/GrandTotalSlice'

const OrderSummary = ({subTotal, promo, grandTotal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCheckout = () => {
        dispatch(grandTotalReducer({total: grandTotal}))
        navigate('/checkout')
    }
  return (
    <>
    <div className='flex w-full md:justify-end'>
        <Box className='basis-[100%] md:basis-[35%] flex flex-col'>
            <div className='py-3 border-b border-[silver]'>
                <Typography variant='h4' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Order Summary</Typography>
            </div>
            <div className='flex justify-between py-3 border-b border-[silver]'>
                <Typography variant='h5' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Sub Total</Typography>
                <Typography variant='h5' className='text-sm font-semibold text-teal-900 tracking-wider font-inter'>${subTotal}</Typography>
            </div>
            <div className='flex justify-between items-center py-3 border-b border-[silver]'>
                <Typography variant='h5' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Promo Code</Typography>
                <TextField variant='outlined' className='text-sm font-semibold text-teal-900 tracking-wider font-inter w-[130px]' size='small'/>
            </div>
            <div className='flex justify-between py-3 border-b border-[silver]'>
                <Typography variant='h5' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Grand Total</Typography>
                <Typography variant='h5' className='text-sm font-semibold text-teal-900 tracking-wider font-inter'>${grandTotal}</Typography>
            </div>
            <div className='flex flex-col gap-2 mt-2 sticky bottom-3 md:static'>
                <Button variant='contained' className='bg-gradient-to-r from-teal-600 to-teal-900 font-inter text-[16px] capitalize tracking-wider' onClick={handleCheckout} size='medium'>Proceed To Checkout</Button>
                <CheckoutGoogle />
            </div>
        </Box>
        
    </div>
    </>
  )
}

export default OrderSummary