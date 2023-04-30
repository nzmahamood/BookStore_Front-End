import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Divtest from '../Bannerslider/Divtest'
import PrimaryNavBar from './PrimaryNavBar'
import PrimaryNavBarLarge from './PrimaryNavBarLarge'
import SecondaryNavBar from './SecondaryNavBar'
import TopNavbar from './TopNavbar'
import { useSelector } from 'react-redux'

const AllNavbars = () => {
  const [isMobile, setIsMobile] = useState(false)
  const {books} = useSelector((state) => state.basket)

  useEffect(() => {
    console.log('count', books?.length)
    if(window.innerWidth < 768){
      setIsMobile(true)
      
    }else{
      setIsMobile(false)
    }
    
  }, [isMobile])
  
  return (
    <>
    {!isMobile && <TopNavbar />}
    <header className='sticky top-0 z-[1000] w-full'>
    { isMobile ? <PrimaryNavBar basketCount={books?.length}/>: <PrimaryNavBarLarge basketCount={books?.length}/>}
    
    {!isMobile && <SecondaryNavBar />}
    </header>
    
    </>
  )
}
export default AllNavbars