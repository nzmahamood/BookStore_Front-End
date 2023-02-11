import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { storeTokenReducer } from '../../contexts/store/tokenSlice'
import AxiosRequest from '../../utils/axios'
import SnackBar from '../snackbar/SnackBar'
import { validateEmail, validatePass } from './form_validations'

const SignIn = () => {
    document.title = "Sign-In || BookStore"
    const ms_logo = require('../../assets/ms-logo.png')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //hooks for forms
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validateFormError, setValidateFormError] = useState({})
    const [signInError, setSignInErro] = useState(false)

    useEffect(()=>{
        if(signInError){
            const timeoutId = setTimeout(()=>{
                setSignInErro(false)
            }, 5000)
            return () => clearTimeout(timeoutId);
        }
    },[signInError])

    const handleSigninSubmit = async (e) =>{
        e.preventDefault()

        let formerrors = {}

        formerrors.email = validateEmail(email)
        formerrors.password = validatePass(password)

        setValidateFormError(formerrors)
        
        if(Object.values(formerrors).every(val => val === '')){
            console.log(formerrors)
            const formValues = { email, password}
           
            try {
                const signinResponse = await AxiosRequest('http://localhost:8000/users/signin', formValues, 'POST')
                console.log(signinResponse)
                dispatch(storeTokenReducer({access: signinResponse.access, refresh: signinResponse.refresh}))
                navigate('/')

            } catch (error) {
                setSignInErro(true)
                console.log(error)
            }
        }
        console.log(Object.keys(formerrors).length)
    }


    useEffect(() => {
        //setting scroll to top of the page
        window.scrollTo(0, 0);
      }, []);

    // for create account and forgot password
    const navigateToLink = (event) =>{
        if(event.target.getAttribute('name') === 'btn-signup'){
            navigate('/sign-up')
        }
        else if(event.target.getAttribute('name') === 'btn-forgot'){
            navigate('/forgot-password')
        }else{
            navigate('/')
        }
    }
  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-y-scroll no-scrollbar'>
        <div onClick={navigateToLink} className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg mt-12'>
        <div className='flex items-center justify-center hover:cursor-pointer'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </div>
        </div>
        {/* form box */}
        <div className='bg-white w-[90%] md:w-[310px] flex flex-col p-3 drop-shadow-lg border border-1 border-slate-400 rounded-lg mt-5'>
            <h2 className='text-xl text-slate-700 tracking-wide text-center font-semibold'>Sign In</h2>
            <form className='flex flex-col' onSubmit={handleSigninSubmit}>
                <label className='text-md font-mono text-slate-500 p-1 m-1'>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3'/>
                {validateFormError.email && <span className='text-xs text-red-600 font-serif m-1'>{validateFormError.email}</span>}

                <label className='text-md font-mono text-slate-500 p-1 m-1'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3' type='password'/>
                {validateFormError.password && <span className='text-xs text-red-600 font-serif m-1'>{validateFormError.password}</span>}
                
                <button type='submit' className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-teal-700 to-teal-600 text-white hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:text-teal-700'>Sign In</button>
            </form>
            <div className='flex flex-row mt-5 justify-between'>
            <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
            <span className=''>OR</span>
            <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
            </div>
            
            <div className=''>
                <button className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-slate-200 to-slate-100 text-teal-900 flex flex-row justify-center'>
                    <img src={ms_logo} alt='ms-logo' className='px-2'/>
                    Sign in with Microsoft
                    </button>

                <div className='text-sm mt-5 pb-3'>
                    <span className='pr-1 pl-1 text-blue-700 hover:cursor-pointer' onClick={navigateToLink} name='btn-signup'>Create a new account</span>
                    <span className='pl-2'>| |</span>
                    <span className='pl-3 text-red-700 hover:cursor-pointer' onClick={navigateToLink} name='btn-forgot'>Forgot password</span>
                </div>
            </div>
        </div>
        {signInError && <div className='flex flex-row justify-center items-center bottom-0'>
        <SnackBar type={0} message="Sign In error this is your error code" />
      </div>}
    </div>
  )
}

export default SignIn