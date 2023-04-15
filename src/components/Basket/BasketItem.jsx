import { AddCircleOutline, DeleteOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, Paper, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket, addToBasketAsync, clearBasket, deleteFromBasketAsync, deleteItemFromBasket, removeFromBasketAsync, removeItemFromBasket } from '../../contexts/store/BasketSlice'
import { showMessage } from '../../contexts/store/SnackSlice'


const BasketItem = ({item, qty}) => {
    const dispatch = useDispatch()
    let availability = true
    const {access_token} = useSelector((state) => state.token)

    const handleRemoveItem = (itemID) => {
        console.log('removedItem', itemID)
        // dispatch(deleteItemFromBasket(itemID))
        dispatch(deleteFromBasketAsync({itemID, access_token}))
        dispatch(showMessage({message: `${item.title} removed from Basket`, severity: 'error'}))
    }

    const handleIncrementItem = (item) => {
        // dispatch(addItemToBasket(item))
        dispatch(addToBasketAsync({item, access_token}))
    };
    
    const handleDecrementItem = (item) => {
        // dispatch(removeItemFromBasket(item))
        dispatch(removeFromBasketAsync({item, access_token}))
    };

    let totalPrice = (qty * item.average_rating).toFixed(2);

  return (
    <Box className='w-full h-[192px] md:h-[235px] flex mb-3 border-b border-[silver]'>
        <div className='flex md:basis-[64%] md:max-w-[64%]  h-full border-r border-[silver]'>
            <Box className='w-[116px] h-[192px] md:w-[175px] md:h-[235px] flex items-center'>
                <Paper className='w-[102px] h-[152px] md:w-[151px] md:h-[215px]' elevation={3}>
                    <img src={item.thumbnail} alt='itemImg' className='w-full h-full' />
                </Paper>
            </Box>
            {/* <IconButton size='small' aria-label='delete'  onClick={()=> handleRemoveItem(item.id)}>
                <DeleteOutline />
            </IconButton> */}
            <div className='hidden md:flex flex-col'>
                <div className='md:flex hidden items-center h-[60px] overflow-hidden'>
                    <h4 className='font-semibold tracking-wide text-[15px] text-slate-900'>{item.title}</h4>
                </div>
                <div className='md:flex hidden items-start h-[36px]'>
                        <span className='font-semibold text-slate-600 text-[10px] tracking-wide'>{item.authors}</span>
                </div>
                {availability ? <Typography variant='h5' className='font-inter font-semibold text-sm text-teal-700 tracking-wider'>AVAILABLE</Typography>: <Typography variant='h5' className='font-inter font-semibold text-sm text-red-700 tracking-wider'>UNAVAILABLE !</Typography>}
            </div>
            
        </div>
        <div className='flex flex-grow md:flex-grow-0 md:basis-[48%] flex-col md:flex-row-reverse md:justify-around font-inter px-3'>
            <div className='flex md:hidden items-start max-h-[60px] overflow-hidden'>
                <h4 className='font-semibold tracking-wide text-[15px] text-slate-900'>{item.title}</h4>
            </div>
            <div className='flex mt-1 md:hidden items-start h-[28px]'>
                <span className='font-semibold text-slate-600 text-[10px] tracking-wide'>{item.authors}</span>
            </div>
            <div className='flex md:basis-[50%] md:justify-between items-center md:flex-col md:h-full h-[36px]'>
                <h4 className='flex gap-1 font-semibold text-sm text-teal-700 md:pt-[1.5rem]'><span className='md:hidden text-xs text-slate-700'>Price : </span><span className='block md:hidden'>$ {item.average_rating}</span><span className='hidden md:block'>$ {totalPrice}</span></h4>
                <div className='hidden md:flex mb-2'>
                    <IconButton aria-label='delete' size='small' onClick={()=>{handleRemoveItem(item.id)}}>
                        <DeleteOutline className='text-red-700'/>
                    </IconButton>
                </div>
            </div>
            <div className='flex md:basis-[50%] md:justify-between items-center md:flex-col md:h-full h-[36px]'>
                <h4 className='flex gap-1 font-semibold text-sm text-teal-700 md:pt-[1.5rem]'><span className='md:hidden text-xs text-slate-700'>Total Price : </span><span className='block md:hidden'>$ {totalPrice}</span><span className='md:block hidden'>$ {item.average_rating}</span></h4>
            </div>
            <div className='w-full flex justify-between md:flex-grow-0 md:basis-[50%] md:items-start flex-grow'>
                <div className='flex-1 flex justify-around md:pt-4 items-center'>
                    <IconButton onClick={() => {handleDecrementItem(item.id)}}><RemoveCircleOutline /></IconButton>
                    <TextField size='small' className='w-[50px] h-[35px]' value={qty}/>
                    <IconButton onClick={()=>{handleIncrementItem(item)}}><AddCircleOutline /></IconButton>
                </div>
                <div className='flex-1 md:hidden flex justify-end'>
                    <IconButton aria-label='delete' size='small' onClick={()=>{handleRemoveItem(item.id)}}>
                        <DeleteOutline className='text-red-700'/>
                    </IconButton>
                </div>
            </div>
        </div>
    </Box>
  )
}

export default BasketItem