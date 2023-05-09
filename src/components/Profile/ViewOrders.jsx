import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL_NET } from '../../utils/domains'
import { ExpandMore } from '@mui/icons-material'
import OrderStepper from './OrderStepper'

const ViewOrders = () => {

  const [orders, setOrders] = useState([])
  const {access_token} = useSelector((state) => state.token)




  useEffect(()=>{
    if(access_token){
      axios.get(`${BASE_URL_NET}/order/api/list-order/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      })
      .then(response => {
        console.log(response)
        setOrders(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },[])


  function formatDate(date){

    const d = new Date(date)

    return d.toLocaleDateString()
  }

  return (
    <Container maxWidth='md' className='relative top-10 border border-[silver] rounded-lg shadow-md'>
      <div className='w-full flex justify-center items-center'>
        <Typography variant='h4'>Track Orders</Typography>
      </div>

      <div className='w-full p-3 flex flex-col gap-3'>
        {orders.length > 0? orders.map(item => <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <div className='w-full flex justify-between'>
                <Typography variant='h6' className='font-inter text-slate-900 text-xs md: text-sm'>{item?.order_number}</Typography>
                <Typography variant='body' className='font-inter text-slate-900 hidden md:block text-xs md: text-sm'>Ordered At: {formatDate(item?.created_at)}</Typography>
                <Typography variant='h6' className='font-inter text-slate-900 text-xs md: text-sm'>Total Amount: £{item?.total_amount}</Typography>
              </div>
                
            </AccordionSummary>
            <AccordionDetails>
                <OrderStepper token={access_token} order={item?.order_number}/>
            </AccordionDetails>
        </Accordion>): <p>No Orders</p>}
      </div>
    </Container>
  )
}

export default ViewOrders