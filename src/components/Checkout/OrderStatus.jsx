import { Alert, AlertTitle, Container, Typography } from '@mui/material'
import React from 'react'

const OrderStatus = () => {
    let status = true
    const message = {
        success: `Congratulations! Your order has been successfully placed. An invoice has been sent to your email at [email that you registered with us]. You can now sit back and relax while we process and prepare your order for shipment. In the meantime, you can track the status of your order in the profile section of your account. Thank you for choosing our service, and we look forward to serving you again in the future!`,
        error: `Oops! We're sorry, but we encountered an error while processing your order. Please try again later or contact our customer support for assistance. We apologize for any inconvenience caused. Thank you for your understanding.`
    }
  return (
    <Container maxWidth='sm' className='mt-5'>
        <Alert severity={status ? 'success': 'error'} variant='outlined'>
            <AlertTitle>{status ? 'Order Placed Successfully': 'Error Occured '}</AlertTitle>
            <Typography variant='body'>{status ? message.success: message.error}</Typography>
            
        </Alert>
    </Container>
  )
}

export default OrderStatus