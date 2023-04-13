import React from 'react'
import {Elements, PaymentElement, useElements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Grid } from '@mui/material'

const StripeElement = () => {
    

    const stripePromise = loadStripe('pk_test_51Muhm4GbD1BHl6nLJwcadq4ULkqTExTZgPtKkZYkfHImYSDejUz8cwAwYq9LkTneLAvDDlKfsx5WeiDmDN2ELDeZ00gCqpvL34')
    const options = {
        theme: 'stripe',
        mode: 'payment',
        amount: 1099,
        currency: 'gbp'
    }
  return (
    <>
        <Elements stripe={stripePromise} options={options} className='w-full mt-3'>
            <PaymentElement />
            
        </Elements>

    </>
  )
}

export default StripeElement


