import { Chip, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewOrder = () => {
    const {state} = useLocation()
    const orderDetails = state.order
  return (
    <Grid container spacing={2}>
        <Grid item xs={7}>
            <Paper className='w-full p-3'>
                <div className='w-full flex justify-between'>
                    <Typography variant='h6' className='text-sm font-semibold tracking-wider'>Order No: <span className='text-blue-700'>#{orderDetails.order_number}</span></Typography>
                    <Chip label='Pending' className='bg-orange-700 text-white' />
                </div>
                <div className='w-full flex justify-between py-3'>
                    <div className='gap-1 flex flex-col'>
                    <Typography variant='h6' className='text-sm font-semibold tracking-wider'>Date Ordered</Typography>
                    <span className='text-slate-900 font-inter'>{new Date(orderDetails.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className='gap-1 flex flex-col'>
                    <Typography variant='h6' className='text-sm font-semibold tracking-wider'>Customer Name</Typography>
                    <span className='text-slate-900 font-inter'>{orderDetails.customer.name}</span>
                    </div>
                    <div className='gap-1 flex flex-col'>
                    <Typography variant='h6' className='text-sm font-semibold tracking-wider'>Customer Email</Typography>
                    <span className='text-slate-900 font-inter'>{orderDetails.customer.email}</span>
                    </div>
                </div>
                <div className='flex justify-around'>
                {/* shipping address */}
                <Grid item xs={5}>
                    <Paper className='w-full flex flex-col p-2'>
                        <Typography variant='h6' className='text-sm font-medium tracking-wider pb-2'>Shipping Address</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.shipping_info.first_name +" "+orderDetails.shipping_info.last_name}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.shipping_info.street_address}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.shipping_info.post_code}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.shipping_info.country}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.shipping_info.special_notes && orderDetails.shipping_info.special_notes}</Typography>
                    </Paper>
                </Grid>
                {/* billing address */}
                <Grid item xs={5}>
                <Paper className='w-full flex flex-col p-2'>
                        <Typography variant='h6' className='text-sm font-medium tracking-wider pb-2'>Billing Address</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.billing_info.first_name +" "+orderDetails.shipping_info.last_name}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.billing_info.street_address}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.billing_info.post_code}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.billing_info.country}</Typography>
                        <Typography variant='h6' className='text-xs font-medium tracking-wider pb-1'>{orderDetails.billing_info?.special_notes && orderDetails.billing_info?.special_notes}</Typography>
                    </Paper>
                </Grid>
                </div>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default ViewOrder