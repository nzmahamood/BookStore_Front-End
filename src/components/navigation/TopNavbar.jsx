import React, { useEffect, useState } from 'react'
import { HeartIcon } from "@heroicons/react/24/outline"
import AccountMenu from './AccountMenu'
import { useSelector } from 'react-redux'
import AuthenticatedMenu from './AuthenticatedMenu'
import WishList from '../Wishlist/WishList'
import { useLocation } from 'react-router-dom'
const TopNavbar = () => {
  const [account, setAccount] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  const {access_token} = useSelector((state) => state.token)
  const location = useLocation()

  const handleWishListOpen = () => {
    setIsOpen(true)
  }

  const handleWishListClose = () => {
    setIsOpen(false)
  }

  const handleWishListToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if(location?.state?.open){
      setIsOpen(true)
    }
  },[location])

  const handleAcClick = () =>{
    setAccount(true)
  }
  return (
    <div className='hidden md:flex w-full bg-gray-300'>
      {/* Quotes */}
      <div className='flex justify-center items-center w-full'>
        <span className='font-inter font-italic text-sm text-slate-900'>“You can never get a cup of tea large enough or a book long enough to suit me.”</span>
        
      </div>
      {/* Account and Wishlist */}
      <div className='flex pr-4'>
          <div className='flex items-center justify-center'>
            {/* <svg className='h-4' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#0F766E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="m4 21v-4c0-1.1046.89543-2 2-2h12c1.1046 0 2 .8954 2 2v4"/></g></svg>
            <span className='text-xs text-slate-700 hover:underline hover:cursor-pointer' onClick={handleAcClick}>Account</span> */}
            {access_token ? <AuthenticatedMenu /> : <AccountMenu />}
          </div>
          <span className='text-lg text-slate-900 px-2'>|</span>
          <div className='flex items-center justify-center'>
            <HeartIcon onClick={() => {handleWishListToggle()}} className='w-4 text-teal-700 hover:cursor-pointer'/>
            <WishList isOpen={isOpen} onClose={handleWishListToggle} />
          </div>
        </div>
    </div>
  )
}

export default TopNavbar