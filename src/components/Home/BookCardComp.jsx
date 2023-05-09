import React, { useState } from 'react'
import { HeartIcon } from "@heroicons/react/24/outline"
import { Basket } from '../../utils/svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket, addToBasketAsync } from '../../contexts/store/BasketSlice'
import MuiSnackBar from '../snackbar/MuiSnackBar'
import { showMessage } from '../../contexts/store/SnackSlice'
import { add_to_cart } from '../../contexts/store/basketapi'
import axios from 'axios'
import { BASE_URL_NET } from '../../utils/domains'

const BookCardComp = ({bookDetails, code}) => {
    const book = require('../../utils/book.jpg')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const { access_token } = useSelector(state => state.token)

    const handleCardClick = (id) =>{
        console.log('id', id)
        navigate(`/book-detail/${id}`)
    }

    const handleAddToWishList = (id) =>{
        console.log(id)
        try{
            if(access_token){
                axios.post(`${BASE_URL_NET}/order/api/wishlist/`, {"book_id": id}, {
                    headers:{
                        "Content-Type": "application/json",
                         "Authorization": `Bearer ${access_token}`
                      }
                })
                .then((response) => {
                    console.log(response.data)
                    dispatch(showMessage({message: `${bookDetails.title} added to WishList`, severity:'success'}))
                })
                .catch((error) => {
                    console.log(error)
                    const errorMessage = error?.response?.data ? error.response.data.message : "Unknown Error Occured"
                    dispatch(showMessage({message: errorMessage, severity: 'error'}))
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    const handleAddToBasket = (item) => {
        // dispatch(addItemToBasket({item, access_token}))
        try{
            console.log('acss', access_token)
            dispatch(addToBasketAsync({item, access_token}))

        }catch(error){
            console.log(error)
        }finally{
            dispatch(showMessage({message: `${bookDetails.title} added to Basket`, severity:'success'}))
        }
        
        
    }
  return (
    <>
    <Link to={`/book-detail/${bookDetails.id}`}>
    <div className='w-[132px] h-[315px] md:w-[162px] md:h-[362px] drop-shadow-lg flex flex-col mt-3 bg-slate-50 rounded relative hover:cursor-pointer'>
        
        {/* div for book cover image */}
        <div className='w-full h-[195px] md:h-[235px] flex justify-center relative'>
            
            <img src={bookDetails.thumbnail} alt='book_cover' className='w-[128px] h-[195px] md:w-[150px] md:h-[235px] rounded-sm'/>
            {/* div for promotion */}
            <div className={code ? 'w-[75%] h-3 md:h-5 bg-gradient-to-r from-orange-400 to-orange-600 absolute top-[-2.5%] rounded-bl-md rounded-tr-md flex items-center justify-center': 'hidden'}>
                <span className='text-[9px] md:text-[11px] font-inter text-slate-50'>{code ? code: ''}</span>
            </div>

        </div>
        {/* div for book details */}
        <div className='w-full max-w-[132px] md:max-w-[162px] min-w-0 h-[120px] md:h-[127px] flex flex-col'>
            {/* title of book */}
            <div className='min-w-0 w-[132px] md:w-[162px] h-8 flex justify-center items-center truncate px-2'>
                <span  className='min-w-0 text-[16px] font-inter font-semibold text-slate-900 text-center truncate'>{bookDetails.title}</span>
            </div>
            {/* author of book */}
            <div className='w-full h-4 flex justify-center px-2'>
                <span className='font-inter font-regular text-slate-600 font-italic text-sm truncate'>{bookDetails.authors}</span>
            </div>
            {/* book price */}
            <div className='w-full h-5 flex justify-center mt-1 md:mt-3'>
                <span className='font-inter font-bold text-teal-700 text-[17px]'><span className='text-slate-700'>$ </span>{bookDetails.average_rating}</span>
            </div>
            {/* buttons */}
            <div className='w-full h-[46px] flex justify-between items-end relative bottom-0 px-1'>
                <button className='p-1 w-9 h-8 text-slate-600 bg-slate-300 rounded-md flex items-center justify-center' onClick={(e) => {e.preventDefault(); handleAddToWishList(bookDetails.id)}}>
                    <HeartIcon className='w-6'/>
                </button>
                <button className='p-1 w-9 h-8 bg-teal-700 text-white rounded-md flex items-center justify-center' onClick={(e)=> {e.preventDefault(); handleAddToBasket(bookDetails)}}><Basket height='h-5'></Basket></button>
            </div>
        </div>
    </div>
    </Link>
    </>
  )
}

export default BookCardComp