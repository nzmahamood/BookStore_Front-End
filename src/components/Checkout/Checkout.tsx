import { Button, Checkbox, Container, FormControlLabel, FormHelperText, Grid, MenuItem, Select, Step, StepLabel, Stepper } from '@mui/material'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ShippingInfo from './ShippingInfo'
import BillingInfo from './BillingInfo'
import { initialValues, validation } from './validation'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/






const Checkout = () => {
    const [sameasShipping, setSameAsShipping] = useState(true)
    const [activeStep, setActiveStep] = useState(0)
    const [dataForm, setDataForm] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleFormChange = (event) => {
        const {name, value} = event.target
        setDataForm({...dataForm, [name]:value})
    }

    const handleBillingComponent = (e) => {
        
        setSameAsShipping(!sameasShipping)
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
                    <ShippingInfo />
                    <Grid item xs={12} md={10}>
                        <FormControlLabel control={<Checkbox checked={sameasShipping} onChange={handleBillingComponent} name='sameAsShipping' />} label='This info is same for Billing Address' />
                    </Grid>
                    {!sameasShipping && <BillingInfo/>}
                </>

            case 1:
                return "Step 2 Payment Method"
            case 2:
                return "Step 3 Order Confirmation"
            case 3:
                return "Step 4 Status"
            default:
                return "Unknown Step"
        }

    }

    const handleNext = async() => {
        if(activeStep === 0){
            const isValid  = await validation.isValid(dataForm)
            console.log(isValid)
        }
        
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
                    <Grid item xs={12} md={8}>
                        <Button fullWidth onClick={handleNext} variant='contained' className='bg-teal-700'>Next</Button>
                    </Grid>
                </Grid>
             
            </form>
    </Container>
  )
}

export default Checkout