import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Badge from '@mui/material/Badge';


const PrimaryNavBarLarge = ({basketCount}) => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate({})
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`)


    }

    const handleSearchChange = (e) => {
        setQuery(e.target.value)
    }
  return (
    <nav className='relative hidden md:flex bg-gradient-to-r from-teal-600 to-teal-900 h-[72px] w-full border-b border-slate-600'>
        {/* logo box */}
        
        <div className='flex w-[15%] items-center justify-end'>
        <Link to='/home' className='flex'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </Link>
        </div>
        
        {/* search box */}
        <div className='flex w-[75%] items-center justify-center'>
            <SearchBox handleSearch={handleSearch} handleSearchChange={handleSearchChange}/>
        </div>
        <div className='flex items-center justify-start h-full w-[10%]'>
        {/* <svg className='h-6 fill-slate-50 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect className='fill-slate-50' width="32" height="128" x="120" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="200" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="280" y="304" fill="#f8fafc" class="ci-primary"/>
                <rect className='fill-slate-50' width="32" height="128" x="360" y="304" fill="#f8fafc" class="ci-primary"/>
                <path className='fill-slate-50' fill="#f8fafc" d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z" class="ci-primary"/>
            </svg> */}
            <Link to={'/feed'}><span className='text-slate-50 font-inter font-semibold text-sm mr-3'>Social Feed</span></Link>
            <Badge badgeContent={basketCount} color='primary'>

                <ShoppingBasketOutlinedIcon className='text-slate-50 text-[32px] hover:cursor-pointer' onClick={()=>navigate('/basket')}/>
            </Badge>
        </div>
    </nav>
  )
}

export default PrimaryNavBarLarge