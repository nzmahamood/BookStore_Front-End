import React, {Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { deepOrange } from '@mui/material/colors'
import { Avatar } from '@mui/material'
const AvatarMenu = ({letter}) => {
    console.log(letter)
    const navigate = useNavigate()
    const handleNavigation = (e) =>{
        if(e.target.name === 'signin'){
            navigate('/sign-in')
        }else{
            navigate('/sign-up')
        }
    }
  return (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className='flex items-center justify-center'>
        <Avatar sx={{ width: 41, height: 41, bgcolor: deepOrange[500] }} className='cursor-pointer'>{letter}</Avatar>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="absolute z-[2000] right-[-10px] mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gradient-to-r from-gray-500 to-gray-700 font-inter font-semibold text-white' : 'text-gray-900'
                    } group flex w-full font-inter font-regular items-center rounded-md px-2 py-2 text-sm`}
                    name='signin'
                    onClick={handleNavigation}
                  >
                    Account Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gradient-to-r from-gray-500 to-gray-700 font-inter font-semibold text-white' : 'text-gray-900'
                    } group flex font-inter font-regular w-full items-center rounded-md px-2 py-2 text-sm`}
                    name='signup'
                    onClick={handleNavigation}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default AvatarMenu