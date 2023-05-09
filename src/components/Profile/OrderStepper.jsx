import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL_NET } from '../../utils/domains'
import { Step, StepLabel, Stepper } from '@mui/material'


const OrderStepper = ({token, order}) => {
    const [status, setStatus] = useState()

    const steps = [
        {label: 'Ordered', completed: true},
        {label: 'Order Processing started', completed: status?.is_paid},
        {label: 'Order Shipped', completed: status?.is_shipped},
        {label: 'Order Delivered', completed: status?.is_delivered}
    ]
    useEffect(()=>{
        if(token){
            axios.get(`${BASE_URL_NET}/order/api/${order}/track/`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                  }
            })
            .then(response => {
                console.log(response)
                setStatus(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[])
  return (
    <div className='w-full flex justify-center'>
        <Stepper activeStep={steps.findIndex(step => !step.completed)} orientation='vertical'>
            {steps.map(({label, completed}) => (
                <Step key={label} completed={completed}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderStepper