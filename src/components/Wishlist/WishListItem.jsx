import { Box, Container, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL_NET } from '../../utils/domains'
import { RemoveCircle, ShoppingBag, ShoppingBasket } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { showMessage } from '../../contexts/store/SnackSlice'
import { addToBasketAsync } from '../../contexts/store/BasketSlice'

const WishListItem = ({access_token}) => {
    const dispatch = useDispatch()

    const [data, setData] = useState([])


    const handleAddToBasket = (item) => {
        // dispatch(addItemToBasket({item, access_token}))
        try{
            console.log('acss', access_token)
            dispatch(addToBasketAsync({item, access_token}))

        }catch(error){
            console.log(error)
        }finally{
            dispatch(showMessage({message: `${item.title} added to Basket`, severity:'success'}))
        }
        
        
    }

    const handleRemove = (item) => {
        console.log(item)
        axios.delete(`${BASE_URL_NET}/order/api/wishlist/${item.id}/`, {}, {
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${access_token}`
              }
        })
        .then((response) => {
            console.log(response.data)
            dispatch(showMessage({message: `${item.title} added to WishList`, severity:'success'}))
        })
        .catch((error) => {
            console.log(error)
            const errorMessage = error?.response?.data ? error.response.data.message : "Unknown Error Occured"
            dispatch(showMessage({message: errorMessage, severity: 'error'}))
        })
    }

    useEffect(()=>{
        axios.get(`${BASE_URL_NET}/order/api/wishlist/`, {
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${access_token}`
              }
        })
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            // dispatch(showMessage({message: 'Cannot fetch posts', severity: 'success'}))
        })
    },[access_token])


  return (
    <Container maxWidth='lg'>

        {data?.map((item) => 
            <div key={item.id} className='w-full flex min-h-[112px] max-h-[130px] border border-[silver] p-3 rounded-lg shadow-md mb-2'>
            <div className='w-[20%] h-full flex items-center justify-center'>
                <img src={item?.thumbnail} alt={item?.title} />
            </div>
            <div className='flex-1 px-2 flex flex-col justify-evenly'>
                <Typography variant='h6' className='text-sm' color='primary'>{item.title}</Typography>
                <Typography variant='h6' className='text-xs' color='secondary'>{item.authors} : author(s)</Typography>
                <Typography variant='h6' className='text-sm text-teal-700'>$ {item.average_rating}</Typography>
                <div className='w-full flex justify-around'>
                    <IconButton onClick={()=>{handleRemove(item)}}>
                        <RemoveCircle className='text-red-700'/>
                    </IconButton>
                    <IconButton onClick={()=>{handleAddToBasket(item)}}>
                        <ShoppingBasket className='text-teal-700' />
                    </IconButton>
                </div>
            </div>
            
        </div>
        )}
        
    </Container>
  )
}

export default WishListItem