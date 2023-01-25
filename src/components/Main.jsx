import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { RegistrationContext } from '../contexts/RegistrationContext';
import { messageReducer, registrationSuccess } from '../contexts/store/RegistrationSlice';
import SnackBar from './snackbar/SnackBar';


function Main() {
    document.title = "Main Navigation"
    const navigate = useNavigate({});
    
    
    
    const SignIn = () => {
        navigate('/sign-in')
    }
    const SignUp = () => {
        navigate('/sign-up')
    }
  return (
    <div>
    <div className='flex flex-col h-screen justify-center items-center'>
        <h2 className='text-center text-2xl font-extrabold'>Welcome</h2>
        {/* {message && <div>{message}</div>} */}
        <div className='flex flex-col h-auto w-auto border border-1 border-slate-600 p-3 m-1 rounded-lg'>
            <button className='w-[162px] rounded-lg bg-teal-500 p-1 text-teal-50 font-bold m-1' onClick={SignIn}>Sign In</button>
            <button className='w-[162px] rounded-lg bg-teal-900 p-1 text-teal-50 font-bold m-1' onClick={SignUp}>Sign up</button>
        </div>
        
    </div>
    
    
    </div>
    
  )
}

export default Main