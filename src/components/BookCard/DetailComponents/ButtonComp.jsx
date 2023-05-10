import { FavoriteBorderOutlined, ShoppingBasket } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasketAsync } from '../../../contexts/store/BasketSlice'
import { showMessage } from '../../../contexts/store/SnackSlice'

const ButtonComp = ({book}) => {
  const dispatch = useDispatch()
  const {access_token} = useSelector((state) => state.token)
  

  const handleAddToBasket = (item) => {
    dispatch(addToBasketAsync({item, access_token}))
    dispatch(showMessage({message: `${item.title} added to Basket`, severity:'success'}))
  }
  return (
    <div className='flex flex-row w-full items-center justify-center md:justify-start gap-4 md:gap-7 py-5'>
        <Button onClick={() =>handleAddToBasket(book)} variant='contained' size='small' endIcon={<ShoppingBasket />} className='bg-teal-700 font-inter tracking-wider md:min-h-[39px]'>Add To Basket</Button>
        {/* <Button variant='contained' size='small' endIcon={<FavoriteBorderOutlined />} className='bg-transparent font-inter tracking-wider text-teal-900 hover:bg-transparent md:min-h-[39px]'>Add To WishList</Button> */}
    </div>
  )
}

export default ButtonComp