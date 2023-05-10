import React, { useState } from 'react'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import CheckoutGoogle from './CheckoutGoogle'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { grandTotalReducer } from '../../contexts/store/GrandTotalSlice'
import { Verified } from '@mui/icons-material'
import axios from 'axios'
import { BASE_URL_NET } from '../../utils/domains'
import { showMessage } from '../../contexts/store/SnackSlice'

const OrderSummary = ({subTotal, promo, grandTotal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [code, setCode] = useState('')
    const {access_token} = useSelector((state) => state.token)
    const [percentage, setPercentage] = useState(0)
    const [grand, setGrand] = useState(subTotal)

    let last_price = (subTotal - percentage).toFixed(2)

    const handleCheckout = () => {
        dispatch(grandTotalReducer({total: grand}))
        navigate('/checkout', {state: {"percentage": percentage}})
    }

    const handlePromoCode = () =>{
        axios.post(`${BASE_URL_NET}/books/api/promo-code/`, {'code': code}, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${access_token}`
            }
          })
          .then(response => {
            console.log(response)
            setPercentage(response.data?.percentage_discount)
            dispatch(showMessage({message: `${response.data?.percentage_discount} % Discount Applied`, severity: 'success'}))

            let total = ((subTotal/100) * 10).toFixed(2)
            setGrand((subTotal - total).toFixed(2))
            console.log('last-price', total)
          })
          .catch(error => {
            console.log(error)

            const errormsg = error?.response?.data?.message ? error.response.data.message : "Unknown Error"


            dispatch(showMessage({message: errormsg, severity: 'error'}))
          })
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
                <Typography variant='h5' className='text-sm font-semibold text-teal-900 tracking-wider font-inter'>£{subTotal}</Typography>
            </div>
            <div className='flex justify-between items-center py-3 border-b border-[silver]'>
                <Typography variant='h5' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Promo Code</Typography>
                <TextField variant='outlined' value={code} onChange={(e) => {setCode(e.target.value)}} className='text-sm font-semibold text-teal-900 tracking-wider font-inter w-[130px]' size='small'/>
                <IconButton onClick={handlePromoCode}>
                    <Verified className={percentage === 0 ? 'text-red-600': 'text-teal-700'}/>
                </IconButton>
            </div>
            <div className='flex justify-between py-3 border-b border-[silver]'>
                <Typography variant='h5' className='text-sm font-semibold text-slate-900 tracking-wider font-inter'>Grand Total</Typography>
                <Typography variant='h5' className='text-sm font-semibold text-teal-900 tracking-wider font-inter'>£{grand}</Typography>
            </div>
            <div className='flex flex-col gap-2 mt-2 sticky bottom-3 md:static'>
                <Button variant='contained' className='bg-gradient-to-r from-teal-600 to-teal-900 font-inter text-[16px] capitalize tracking-wider' onClick={handleCheckout} size='medium'>Proceed To Checkout</Button>
                {/* <CheckoutGoogle /> */}
            </div>
        </Box>
        
    </div>
    </>
  )
}

export default OrderSummary