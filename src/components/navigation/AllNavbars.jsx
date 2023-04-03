import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Divtest from '../Bannerslider/Divtest'
import PrimaryNavBar from './PrimaryNavBar'
import PrimaryNavBarLarge from './PrimaryNavBarLarge'
import SecondaryNavBar from './SecondaryNavBar'
import TopNavbar from './TopNavbar'

const AllNavbars = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
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
    { isMobile ? <PrimaryNavBar />: <PrimaryNavBarLarge />}
    
    {!isMobile && <SecondaryNavBar />}
    </header>
    
    </>
  )
}
export default AllNavbars