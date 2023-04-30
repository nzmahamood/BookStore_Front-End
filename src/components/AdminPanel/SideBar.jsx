import { BarChart, Copyright, LibraryBooksRounded, MenuBookOutlined, PeopleAlt, ShoppingBag, ShoppingBasket } from '@mui/icons-material'
import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    
    const isActiveTab = (path) =>{
        return pathname === path
    }

    const handleNavigationClick = (path) =>{
        navigate(path)
    }
  return (
    <aside className='w-[220px] lg:w-[270px] xl:w-[300px] min-h-screen rounded-r-lg bg-gradient-to-r from-gray-700 to-gray-900 border-r-2 border-slate-900 flex flex-col fixed bottom-0 left-0 overflow-x-hidden overflow-y-hidden z-[3000]'>
        <div className='w-full min-h-[64px] flex items-center justify-start pl-6 border-b border-slate-50'>
            <LibraryBooksRounded className='h-6 w-6 text-slate-50' />
            <Typography className='text-slate-100 ml-2'>Book Store</Typography>
        </div>
        <Box className='w-full mt-3 flex-1'>
            <MenuList className='w-full pl-2 flex flex-col gap-2 text-slate-50'>
                <MenuItem selected={isActiveTab('/admin')} onClick={()=>handleNavigationClick('/admin')}>
                    <ListItemIcon>
                        <SpeedIcon fontSize="small" className='text-slate-50'/>
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </MenuItem>
                <MenuItem selected={isActiveTab('/admin/orders')} onClick={()=>handleNavigationClick('/admin/orders')}>
                    <ListItemIcon>
                        <ShoppingBasket fontSize="small" className='text-slate-50'/>
                    </ListItemIcon>
                    <ListItemText>Orders</ListItemText>
                </MenuItem>
                <MenuItem selected={isActiveTab('/admin/books')} onClick={()=>handleNavigationClick('/admin/books')}>
                    <ListItemIcon>
                        <MenuBookOutlined fontSize="small" className='text-slate-50'/>
                    </ListItemIcon>
                    <ListItemText>Books</ListItemText>
                </MenuItem>
                <MenuItem selected={isActiveTab('/admin/customers')} onClick={()=>handleNavigationClick('/admin/customers')}>
                    <ListItemIcon>
                        <PeopleAlt fontSize="small" className='text-slate-50'/>
                    </ListItemIcon>
                    <ListItemText>Customers</ListItemText>
                </MenuItem>
                <MenuItem selected={isActiveTab('/admin/sales')} onClick={()=>handleNavigationClick('/admin/sales')}>
                    <ListItemIcon>
                        <BarChart fontSize="small" className='text-slate-50'/>
                    </ListItemIcon>
                    <ListItemText>Sales</ListItemText>
                </MenuItem>
            </MenuList>
        </Box>
        <div className='flex items-center justify-center w-full h-[64px] border-t border-slate-50'>
            <Typography variant='body' className='text-gray-300 text-xs'><Copyright className='h-3 text-gray-300' /> 2023 Bookstore pvt ltd All rights reserved.</Typography>
        </div>
    </aside>
  )
}

export default SideBar