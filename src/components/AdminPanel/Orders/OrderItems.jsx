import { Button, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL_NET } from '../../../utils/domains'
import { useDispatch } from 'react-redux'
import { showMessage } from '../../../contexts/store/SnackSlice'

const OrderItems = ({items, order, token}) => {

  const dispatch = useDispatch()

  const handleShipping = () => {
    axios.post(`${BASE_URL_NET}/admin-api/api/mark-ship/`, {'order_number': order}, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response)
      dispatch(showMessage({message: response?.data?.message, severity: 'success'}))
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <Grid container spacing={2} className='mt-5'>
        {items && items.map(item => 
        <Grid item xs={6}> 
        <Paper className='min-h-[250px] w-full p-3'>
            <Typography variant='h6'> Book Id Number: {item.book}</Typography>
            <Typography variant='h6'> Item Quantity: {item.quantity}</Typography>
            <Typography variant='h6'> Unit Price: {item.unit_price}</Typography>
            <Typography variant='h6'> Total Price: {item.total_price}</Typography>
        </Paper>
        </Grid>
            )}

            <div className='w-full mt-5 bt-3 flex justify-end px-10'>
                <Button onClick={handleShipping} variant='filled' className='bg-teal-700 text-white hover:text-slate-900'>Mark As Shipped</Button>
            </div>
    </Grid>
  )
}

export default OrderItems