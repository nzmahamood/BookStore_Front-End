import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SnackBar from '../snackbar/SnackBar'
import { validateConfirmPassword, validateEmail, validatePassword, validateSixCode } from './form_validations'

const ForgotPass = () => {
    document.title = "Forgot Password || BookStore"
    const navigate = useNavigate()
    const [formState, setFormState] = useState('email') //for email form

    //hooks for form
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const [validateFormError, setValidateFormError] = useState({})
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(error){
            const timeoutId = setTimeout(()=>{
                setError(false)
            }, 5000)
            return () => clearTimeout(timeoutId);
        }
    },[error])

    const postData = (url, data) => {
        axios.get(url, data)
        .then(response => {
            console.log(response)
            setFormState('code')
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })
    }

    const handleEmailSubmit = (e) =>{
        e.preventDefault()
        let formerrors = {}

        formerrors.email = validateEmail(email)
        setValidateFormError(formerrors)

        if(Object.values(formerrors).every(val => val === '')){
            const formValues = {email}
            postData('url', formValues)
            setFormState('code')
        }

    }

    //handling code submit

    const handleCodeSubmit = (e) =>{
        e.preventDefault()
        let formerrors = {}

        formerrors.code = validateSixCode(code)
        setValidateFormError(formerrors)

        if(Object.values(formerrors).every(val => val === '')){
            const formValues = {email, code}
            postData('url', formValues)
            setFormState('reset')
        }
    }

    //handling new password submit

    const handleNewPasswordSubmit = (e) =>{
        e.preventDefault()

        let formerrors = {}

        formerrors.password = validatePassword(password)
        formerrors.confirmpass = validateConfirmPassword(password, confirmpass)
        setValidateFormError(formerrors)

        if(Object.values(formerrors).every(val => val === '')){
            const formValues = {email, password}
            postData('url', formValues)

            navigate('/')
        }
    }
    useEffect(() => {
        //setting scroll to top of the page
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='w-full h-full flex flex-col items-center overflow-y-scroll no-scrollbar p-3'>
        <div onClick={()=> navigate('/')} className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg mt-12'>
        <div className='flex items-center justify-center hover:cursor-pointer'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </div>
        </div>
        <div className='bg-white w-[90%] md:w-[310px] flex flex-col p-3 drop-shadow-lg border border-1 border-slate-400 rounded-lg mt-5'>
       
        
        { formState === 'email' && (
            
            <div className=''>
                 <h2 className='pb-4 text-xl text-slate-700 tracking-wide text-center font-semibold'>Forgot your password?</h2>
            <span className='text-sm mt-3 font-sans font-normal text-slate-700'>Please enter your email address to reset your password</span>

            <form className='flex flex-col mt-3' onSubmit={handleEmailSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3' />
                {validateFormError.email && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.email}</span>}
                <button type='submit' className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-teal-700 to-teal-600 text-white hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:text-teal-700'>Send Code</button>
    
            </form>
            </div>
        )}

        { formState === 'code' && (
            <div className=''>
            <span className='text-sm mt-3 font-sans font-semibold text-slate-700'>Please enter your code that has been sent to your email</span>
            <form className='flex flex-col mt-3' onSubmit={handleCodeSubmit}>
                <input type="number" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code" className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3' />
                {validateFormError.code && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.code}</span>}
                <button type='submit' className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-teal-700 to-teal-600 text-white hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:text-teal-700'>Reset Password</button>
    
            </form>
            </div>
        )}

        { formState === 'reset' && (
            <div className=''>
            <span className='text-sm mt-3 font-sans font-semibold text-slate-700'>Please enter your new password</span>
            <form className='flex flex-col mt-3' onSubmit={handleNewPasswordSubmit}>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className='mt-1 border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3' />
                {validateFormError.password && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.password}</span>}
                <input type="password" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} placeholder="Confirm Password" className='mt-2 border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3' />
                {validateFormError.confirmpass && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.confirmpass}</span>}
                <button type='submit' className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-teal-700 to-teal-600 text-white hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:text-teal-700'>Save Password</button>
    
            </form>
            </div>
        )}
        
        
        </div>
        {error && <div className='flex flex-row justify-center items-center bottom-0'>
        <SnackBar type={0} message="Sign In error this is your error code" />
      </div>}
    </div>
  )
}

export default ForgotPass