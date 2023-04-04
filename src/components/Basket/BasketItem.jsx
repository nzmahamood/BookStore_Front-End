import { AddCircleOutline, DeleteOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, Paper, IconButton, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToBasket, clearBasket, removeItemFromBasket } from '../../contexts/store/BasketSlice'


const BasketItem = ({item}) => {
    const dispatch = useDispatch()

    const handleRemoveItem = (item) => {
        console.log('removedItem', item)
        dispatch(removeItemFromBasket(item.id))
    }

    const handleIncrementItem = (item) => {
        dispatch(addItemToBasket(item));
    };
    
    const handleDecrementItem = (item) => {
        dispatch(removeItemFromBasket(item));
    };


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
            <div className='hidden: md:flex flex-col'>
                <div className='md:flex hidden items-center h-[60px] overflow-hidden'>
                    <h4 className='font-semibold tracking-wide text-[15px] text-slate-900'>{item.title}</h4>
                </div>
                <div className='md:flex hidden items-start h-[36px]'>
                        <span className='font-semibold text-slate-600 text-[10px] tracking-wide'>{item.authors}</span>
                </div>
            </div>
            
        </div>
        <div className='flex flex-grow md:flex-grow-0 md:basis-[32%] flex-col md:flex-row-reverse md:justify-around font-inter px-3'>
            <div className='flex md:hidden items-center h-[60px] overflow-hidden'>
                <h4 className='font-semibold tracking-wide text-[15px] text-slate-900'>{item.title}</h4>
            </div>
            <div className='flex md:hidden items-start h-[36px]'>
                <span className='font-semibold text-slate-600 text-[10px] tracking-wide'>{item.authors}</span>
            </div>
            <div className='flex md:basis-[50%] md:justify-center items-center h-[36px]'>
                <h4 className='font-semibold text-sm text-teal-700 md:pt-5'>$ {item.average_rating}</h4>
            </div>
            <div className='w-full flex justify-between md:flex-grow-0 md:basis-[50%] md:items-start flex-grow'>
                <div className='flex-1 flex justify-around md:pt-4 items-center'>
                    <IconButton onClick={() => {handleDecrementItem(item.id)}}><RemoveCircleOutline /></IconButton>
                    <TextField size='small' className='w-[50px] h-[35px]' value={item.quantity}/>
                    <IconButton onClick={()=>{handleIncrementItem(item)}}><AddCircleOutline /></IconButton>
                </div>
                <div className='flex-1 md:hidden flex justify-end'>
                    <IconButton aria-label='delete' size='small' onClick={()=>{handleRemoveItem(item.id)}}>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    </Box>
  )
}

export default BasketItem