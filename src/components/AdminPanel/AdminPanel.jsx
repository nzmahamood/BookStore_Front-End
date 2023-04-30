import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'
import AdminContent from './AdminContent'

const AdminPanel = () => {
    const {access_token} = useSelector((state) => state.token)
    console.log('access_token', {access_token})
  return (
    <div className='flex relative'>
        <SideBar />
        <div className='w-[calc(100%_-_220px)] lg:w-[calc(100%_-_270px)] xl:w-[calc(100%_-_300px)] absolute right-0'>
        <AdminContent />
        </div>
        
        
    </div>
  )
}

export default AdminPanel