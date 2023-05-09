import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderItems = ({items}) => {
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
                <Button variant='filled' className='bg-teal-700 text-white hover:text-slate-900'>Mark As Shipped</Button>
            </div>
    </Grid>
  )
}

export default OrderItems