import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const OrderConfirmation = ({total}) => {
    const books = useSelector(state => state.basket)
  return (
    <Container maxWidth='md' className='pt-6'>
        <Typography variant='h4' className='mb-3 font-inter text-[1.75rem] text-slate-900'>Order Confirmation</Typography>
        <Grid container spacing={2}>{books.map((book) => <OrderComponent items={book}/>)}</Grid>
            <div className='flex bg-slate-300 py-3 mt-3 w-full justify-between px-3'>
                <Typography className='font-inter text-slate-900 text-sm' variant='h6'>Grand Total </Typography>
                <Typography className='font-inter text-teal-900 text-sm' variant='h6'>$ {total}</Typography>
            </div>
    </Container>
  )
}

function OrderComponent({items}){
    let totalPrice = (items.quantity * items.average_rating).toFixed(2);
    return(
            <Grid item xs={12} md={6} className=''>
            <Paper elevation={3} className='w-full md:min-h-[170px] justify-center flex flex-col bg-slate-100 mb-1 p-3'>
                <Typography className='font-inter text-[17px] text-slate-900' variant='h6'>{items.title} <span className='text-slate-600 text-xs'>by {items.authors}</span></Typography>
                <Typography className='font-inter text-[17px] text-slate-900' variant='h6'>x {items.quantity}</Typography>
                <Typography className='font-inter text-[17px] text-slate-900' variant='h6'>$ {totalPrice}</Typography>
            </Paper>
            </Grid>
    )
}

export default OrderConfirmation