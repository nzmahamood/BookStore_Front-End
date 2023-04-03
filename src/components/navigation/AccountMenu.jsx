import React, {Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
const AccountMenu = () => {
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
        <div className='hidden md:inline-block'>
        <svg className='h-4' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#0F766E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="m4 21v-4c0-1.1046.89543-2 2-2h12c1.1046 0 2 .8954 2 2v4"/></g></svg>
        </div>
        <div className='md:hidden'>
        <svg className='h-7' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="m4 21v-4c0-1.1046.89543-2 2-2h12c1.1046 0 2 .8954 2 2v4"/></g></svg>
        </div>
        <span className='hidden md:inline-block text-xs text-slate-700 hover:underline hover:cursor-pointer'>Account</span>
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
                      active ? 'bg-teal-700 font-inter font-semibold text-white' : 'text-gray-900'
                    } group flex w-full font-inter font-regular items-center rounded-md px-2 py-2 text-sm`}
                    name='signin'
                    onClick={handleNavigation}
                  >
                    Sign In
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-teal-700 font-inter font-semibold text-white' : 'text-gray-900'
                    } group flex font-inter font-regular w-full items-center rounded-md px-2 py-2 text-sm`}
                    name='signup'
                    onClick={handleNavigation}
                  >
                    Sign Up
                  </button>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default AccountMenu