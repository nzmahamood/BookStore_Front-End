import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

    const handleEmailSubmit = (e) =>{
        e.preventDefault()
        let formerrors = {}

        formerrors.email = validateEmail(email)
        setValidateFormError(formerrors)

        if(Object.values(formerrors).every(val => val === '')){
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
            alert('password reset successfully')
            navigate('/')
        }
    }
    useEffect(() => {
        //setting scroll to top of the page
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-y-scroll no-scrollbar p-3'>
        <div className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg mt-12'>
            <h2 className='text-3xl font-bold tracking-widest font-serif text-slate-500'>Book<span className='font-semibold text-slate-600 font-mono'>Store</span></h2>
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
            
    </div>
  )
}

export default ForgotPass