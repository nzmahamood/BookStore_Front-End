import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import { useSelector } from 'react-redux'
import { decodeToken } from '../../utils/utils'
import AvatarMenu from './AvatarMenu'
import AccountMenu from '../navigation/AccountMenu'

const AdminNavbar = () => {
  const {access_token} = useSelector((state) => state.token)
    const {name} = decodeToken(access_token) ||{}
    

    function firstLetter (){
        if(!name){
            return "A"
        }else{
            return name.charAt(0).toUpperCase()
        }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='bg-gradient-to-r from-gray-50 to-gray-100 text-blue-700 items-end  z-[2999]'>
        
        <Toolbar className='w-[calc(100%_-_220px)] lg:w-[calc(100%_-_270px)] xl:w-[calc(100%_-_300px)] px-[1.9rem] relative'>
        <Box className='h-full w-[220px] lg:w-[270px] xl:w-[300px]'>
            
        </Box>
        <Box className='w-[350px] h-full absolute right-0 flex items-center justify-end pr-6'>
        <AvatarMenu letter={firstLetter()}/>
        </Box>
          
        </Toolbar>
      </AppBar>
      </Box>
  )
}

export default AdminNavbar