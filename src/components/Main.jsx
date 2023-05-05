import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { RegistrationContext } from '../contexts/RegistrationContext';
import { messageReducer, registrationSuccess } from '../contexts/store/RegistrationSlice';
import { signoutReducer } from '../contexts/store/tokenSlice';
import AxiosRequest from '../utils/axios';
import SnackBar from './snackbar/SnackBar';
import { BASE_URL_NET } from '../utils/domains';


function Main() {
    document.title = "Main Navigation"
    const [snackStatus, setSnackStatus] = useState(false)
    const navigate = useNavigate({});
    const dispatch = useDispatch()
    const {refresh_token} = useSelector(state => state.token)

    useEffect(()=>{
        navigate('/home')
    },[])

    const handleButtonClick = async (e) => {
        if(e.target.name === 'signin'){
            navigate('/sign-in')
        }else if(e.target.name === 'signup'){
            navigate('sign-up')
        }else if(e.target.name === 'signout'){
            dispatch(signoutReducer())
            const response = await AxiosRequest(`${BASE_URL_NET}/users/signout`, {refresh: refresh_token}, 'POST')
            console.log(response)
            setSnackStatus(true)

        }else if(e.target.name === 'home'){
            navigate('home')
        }
        else{
            navigate('/account')
        }
    }
    
  return (
    <div>
    <div className='flex flex-col h-screen justify-center items-center'>
        <h2 className='text-center text-2xl font-extrabold'>Welcome</h2>
        {/* {message && <div>{message}</div>} */}
        <div className='flex flex-col h-auto w-auto border border-1 border-slate-600 p-3 m-1 rounded-lg'>
            <button className='w-[162px] rounded-lg bg-teal-500 p-1 text-teal-50 font-inter font-italic font-regular m-1' name='signin' onClick={handleButtonClick}>Sign In</button>
            <button className='w-[162px] rounded-lg bg-teal-700 p-1 text-teal-50 font-bold m-1' name='signup' onClick={handleButtonClick}>Sign up</button>
            <button className='w-[162px] rounded-lg bg-teal-900 p-1 text-teal-50 font-bold m-1' name='account' onClick={handleButtonClick}>Account</button>
            <button className='w-[162px] rounded-lg bg-teal-700 p-1 text-teal-50 font-bold m-1' name='home' onClick={handleButtonClick}>Home Page</button>
            {refresh_token && <button className='w-[162px] rounded-lg bg-red-700 p-1 text-teal-50 font-bold m-1' name='signout' onClick={handleButtonClick}>Sign Out</button>}
        </div>
         
    </div>
    
    { snackStatus && <SnackBar message="Signed out successfully" />}
    </div>
    
  )
}

export default Main