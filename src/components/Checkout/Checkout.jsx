import { Button, Checkbox, Container, FormControlLabel, FormHelperText, Grid, MenuItem, Select, Step, StepLabel, Stepper } from '@mui/material'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ShippingInfo from './ShippingInfo'
import BillingInfo from './BillingInfo'
import { initialValues, validation } from './validation'
import StripeElement from './StripeElement'
import OrderAndPayment from './OrderAndPayment'
import { useSelector } from "react-redux";
import OrderConfirmation from './OrderConfirmation'
import OrderStatus from './OrderStatus'







const Checkout = () => {
    const [sameasShipping, setSameAsShipping] = useState(true)
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState(initialValues)
    const [billingData, setBillingData] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [billingErrors, SetBillingErrors] = useState({})
    const total = useSelector((state) => state.total.total)
    console.log('checkouttotal', total)


    const handleShippingChange = (event) => {
        const {name, value} = event.target
        console.log('value', value)
        setShippingData({...shippingData, [name]: value})
        console.log('shipping', shippingData)
    }

    const handleBillingChange = (event) => {
        const {name, value} = event.target
        setBillingData({...billingData, [name]: value})
    }

    const handleBillingComponent = (e) => {
        const {checked} = e.target
        if(checked){
            setBillingData(shippingData)
            SetBillingErrors({})
        }
        setSameAsShipping(e.target.checked)
        console.log('eventt', sameasShipping)
    }

    function getSteps(){
        return ['Address', 'Payment', 'Order', 'Status']
    }

    const steps = getSteps()

    function getStepContent(stepIndex){
        switch(stepIndex){
            case 0:
                return <>
                    <ShippingInfo handleChange={handleShippingChange} shipping={shippingData} error={errors}/>
                    <Grid item xs={12} md={10}>
                        <FormControlLabel control={<Checkbox checked={sameasShipping} onChange={handleBillingComponent} name='sameAsShipping' />} label='This info is same for Billing Address' />
                    </Grid>
                    {!sameasShipping && <BillingInfo handleChange={handleBillingChange} billing={billingData} error={billingErrors}/>}
                </>

            case 1:
                return <OrderConfirmation total={total}/>
                
            case 2:
                return <OrderAndPayment total={total}/>
            case 3:
                return <OrderStatus />
            default:
                return "Unknown Step"
        }

    }

    const handleNext = async (e) => {
        e.preventDefault()
        if (activeStep === 0) {
          if (sameasShipping) {
            setBillingData(shippingData);
            console.log('billing', billingData)
          }
          try {
            await validation.validate(shippingData, { abortEarly: false })
            setErrors({})
            
          } catch (errors) {
            const newShippingErrors = {};
            errors.inner.forEach(error => {
                newShippingErrors[error.path] = error.message
            })
            setErrors(newShippingErrors)
            
          }
          if (!sameasShipping) {
            try{
                await validation.validate(billingData, { abortEarly: false })
                SetBillingErrors({})
                
            }catch(billErrors){
               const newBillingErrors = {}
                billErrors.inner.forEach(billError => {
                    newBillingErrors[billError.path] = billError.message
                    
                })
                SetBillingErrors(newBillingErrors)
            }
        }
        if (Object.values(errors).every(val => val === '') && Object.values(billingErrors).every(val => val === '')) {
            setActiveStep(prevStep => prevStep + 1)
          }
        } else {
          setActiveStep(prevStep => prevStep + 1);
        }
      };

    const handlePrev = () => {
        setActiveStep(prevStep => prevStep - 1)
    }
    
  return (
    <Container maxWidth='md' className='relative top-5'>
        <div className='w-full mb-3 flex flex-col items-center'>
            <h4 className='font-inter font-semibold tracking-wider text-slate-900'>Checkout</h4>
            <Stepper className='w-full mt-3' activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            </div>
            
             <form className='flex flex-col  gap-1'>
                <Grid container className='justify-center' spacing={2}>
                    {activeStep === steps.length ? "Steps Completed":
                    (
                        getStepContent(activeStep)
                    )
                    }
                    <div className='w-full flex justify-between p-3 md:justify-start md:gap-2 flex-row-reverse'>
                        <Button type='submit' onClick={handleNext} variant='contained' className='bg-teal-700'>{activeStep === 2 ? 'Place Order': 'Next'}</Button>
                        {activeStep !== 0 && <Button onClick={handlePrev} variant='outlined'>Cancel</Button>}
                    </div>
                </Grid>
             
            </form>
    </Container>
  )
}

export default Checkout