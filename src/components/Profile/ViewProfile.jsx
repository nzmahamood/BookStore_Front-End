import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Container, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import { useSelector } from 'react-redux'
import { decodeToken } from '../../utils/utils'
import { ExpandMore } from '@mui/icons-material'
import EditableInput from './EditableInput'

const ViewProfile = () => {
    const {access_token} = useSelector((state) => state.token)
    const {name} = decodeToken(access_token)

    function firstLetter (){
        if(!name){
            return "A"
        }else{
            return name.charAt(0).toUpperCase()
        }
    }
    console.log('decode', firstLetter())
  return (
    <Container maxWidth='sm' className='min-h-[300px] py-3 border border-[silver] relative top-5 rounded-md'>
        <div className='w-full flex flex-col items-center justify-center border-b border-[silver] mb-3 pb-1'>
            <Avatar sx={{ width: 56, height: 56, bgcolor: deepOrange[500] }}>{firstLetter()}</Avatar>
            <Typography variant='h4' className='mt-1 font-inter font-semibold text-blue-700'>{name && name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
        </div>
        <div className='w-full flex flex-col gap-3'>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant='h6' className='font-inter text-slate-900'>Shipping Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EditableInput type='shipping'/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant='h6' className='font-inter text-slate-900'>Billing Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EditableInput type='billing'/>
            </AccordionDetails>
        </Accordion>
        </div>
    </Container>
  )
}

export default ViewProfile