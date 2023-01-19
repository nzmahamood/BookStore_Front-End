import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { validateEmail, validatePass } from './form_validations'

const SignIn = () => {
    document.title = "Sign-In || BookStore"
    const ms_logo = require('../../assets/ms-logo.png')
    const navigate = useNavigate()

    //hooks for forms
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validateFormError, setValidateFormError] = useState({})

    const handleSigninSubmit = (e) =>{
        e.preventDefault()

        let formerrors = {}

        formerrors.email = validateEmail(email)
        formerrors.password = validatePass(password)

        setValidateFormError(formerrors)
        
        if(Object.values(formerrors).every(val => val === '')){
            console.log(formerrors)
            alert('submitted succesfully')
            navigate('/')
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
        }
    }
  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-y-scroll no-scrollbar'>
        <div className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg mt-12'>
            <h2 className='text-3xl font-bold tracking-widest font-serif text-slate-500'>Book<span className='font-semibold text-slate-600 font-mono'>Store</span></h2>
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

                <div className='text-[10px] mt-5 pb-3'>
                    <span className='pr-1 pl-1 text-blue-700 hover:cursor-pointer' onClick={navigateToLink} name='btn-signup'>Create a new account</span>
                    <span className='pl-2'>| |</span>
                    <span className='pl-3 text-red-700 hover:cursor-pointer' onClick={navigateToLink} name='btn-forgot'>Forgot password</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn