import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import StripeElement from './StripeElement'

const OrderAndPayment = ({total, formRef, handlePaymentSuccess}) => {
  return (
    <Grid container spacing={2} className='mt-3 pl-6 md:pl-9'>
        <Grid item xs={12} md={6} className=''>
            <Box className='border rounded bg-slate-100 border-[silver] py-3 md:ml-3'>
                <Card className='py-3 px-3 bg-inherit'><Typography className='font-inter text-slate-900' variant='h4'>Amount to Pay</Typography></Card>
                
                <Typography className='pt-3 px-3 font-inter text-teal-900' variant='h5'>GBP {total}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} className='flex justify-center'>
            <StripeElement formRef={formRef} handlePaymentSuccess={handlePaymentSuccess} />
        </Grid>
    </Grid>
  )
}

export default OrderAndPayment