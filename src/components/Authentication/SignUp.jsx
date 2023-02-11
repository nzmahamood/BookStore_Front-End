import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useContext } from 'react';
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RegistrationContext } from '../../contexts/RegistrationContext';
import { messageReducer, registrationSuccess } from '../../contexts/store/RegistrationSlice';
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateAcceptTerms } from './form_validations';
import SnackBar from '../snackbar/SnackBar';
import AxiosRequest from '../../utils/axios';
import { storeTokenReducer } from '../../contexts/store/tokenSlice';

const SignUp = () => {
  document.title = "Sign-Up || BookStore"
  const navigate = useNavigate()
  const prepath = useParams()

  //hooks for form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  const [acceptterms, setAcceptTerms] = useState(true)
  const [regError, setRegError] = useState(false)
  const [regErrorMsg, setRegErrorMsg] = useState([]) 

  //hook for validation
  const [validateFormError, setValidateFormError] = useState({})

  //const [registrationSuccess, setRegistrationSuccess] = useState(false)
  
  const dispatch = useDispatch()
  const {redirect} = useLocation()
  const { access_token, refresh_token } = useSelector(state => state.token)

  useEffect(()=>{
    if(regError){
      const timeoutId = setTimeout(() => {
        // Function to execute after 5 seconds
        setRegError(false)
      }, 5000);
  
      return () => clearTimeout(timeoutId);
    }
  },[regError])
  //form submit
  const handleSignupSumbit = async (e) =>{
    //dispatch(messageReducer({ name: "name", age: 20, email: "emailo@email.com" }))
    e.preventDefault()
    
    console.log("pathname: "+prepath.state)
    
    let formerrors = {}

    formerrors.name = validateName(name)
    formerrors.email = validateEmail(email)
    formerrors.password = validatePassword(password)
    formerrors.confirmpass = validateConfirmPassword(password, confirmpass)
    formerrors.acceptterms = validateAcceptTerms(acceptterms)

    setValidateFormError(formerrors)

    if(Object.values(formerrors).every(val => val === '')){
      console.log("Done")
      const formValues = { name, email, password}
      
      
      //post request to sign up api
      
      try {
        const signupResponse = await AxiosRequest('http://localhost:8000/users/signup', formValues, 'POST')
        console.log(signupResponse.access)
        dispatch(messageReducer({success: true, successMessage: "Registeredd"}))
        dispatch(storeTokenReducer({access: signupResponse.access, refresh: signupResponse.refresh}))
        console.log(`access: ${access_token} refresh: ${refresh_token}`)
        navigate('/')
      } catch (error) {
        console.log(error.email ? error.email : error)
        setRegError(true)
        setRegErrorMsg(error.email ? error.email : 'Network error: Connection Failed 500')
        console.log(regErrorMsg)
      }
    }
  }


  const ms_logo = require('../../assets/ms-logo.png')
    useEffect(() => {
        //setting scroll to top of the page
        window.scrollTo(0, 0);
      }, []);
  return (
     <RegistrationContext.Provider value={{registrationSuccess: registrationSuccess}}>
      
    <div className='w-screen h-screen flex flex-col items-center overflow-y-scroll no-scrollbar'>
    <div onClick={()=> navigate('/')} className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg mt-12'>
        <div className='flex items-center justify-center hover:cursor-pointer'>
        <svg className='h-6 fill-slate-50' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-118.41 145.1c-59.33-36.32-155.43-46.3-203.79-49.05-16.25-.92-29.8 11.46-29.8 27.09v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-245.99c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06v-222.82c-.01-15.63-13.56-28.01-29.81-27.09z"/></svg>
        <h4 className='px-2 mt-1 text-slate-50 text-center font-inter font-semibold font-italic'>Book<span className='font-inter font-semibold'>Store</span></h4>
        </div>
        </div>
        {/* form box */}
        <div className='bg-white w-[90%] md:w-[310px] mb-3 flex flex-col p-3 drop-shadow-lg border border-1 border-slate-400 rounded-lg mt-5'>
        <h2 className='text-xl text-slate-700 tracking-wide text-center font-semibold'>Sign Up</h2>

        <form className='flex flex-col' onSubmit={handleSignupSumbit}>
          <label className='text-md font-mono text-slate-500 p-1 m-1'>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3'/>
          {validateFormError.name && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.name}</span>}

          <label className='text-md font-mono text-slate-500 p-1 m-1'>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3'/>
          {validateFormError.email && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.email}</span>}

          <label className='text-md font-mono text-slate-500 p-1 m-1'>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3'/>
          {validateFormError.password && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.password}</span>}


          <label className='text-md font-mono text-slate-500 p-1 m-1'>Confirm Password</label>
          <input type='password' value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} className='border border-slate-300 rounded w-full focus: outline-none focus:shadow-outline p-1 px-3'/>
          {validateFormError.confirmpass && <span className='m-1 text-xs text-red-600 font-serif'>{validateFormError.confirmpass}</span>}

          <div className='flex flex-row mt-2 items-center'>
            <input checked = {acceptterms} onChange={(e) => setAcceptTerms(e.target.checked)} type='checkbox' className='w-4 h-4 rounded text-slate-600'/>
            <label className='pl-1 text-sm font-mono text-slate-500'>I Agree to <a href='/terms-conditions' className='underline text-blue-700'>Terms and Conditions</a></label>
          </div>

          <button type='submit' disabled={!acceptterms} className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-teal-700 to-teal-600 text-white hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:text-teal-700'>Sign Up</button>
        </form>

        <div className='flex flex-row mt-5 justify-between'>
          <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
          <span className=''>OR</span>
          <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
        </div>

        <button className='w-full border border-slate-500 text-md font-mono p-1 mt-5 rounded bg-gradient-to-r from-slate-200 to-slate-100 text-teal-900 flex flex-row justify-center'>
          <img src={ms_logo} alt='ms-logo' className='px-2'/>
          Sign up with Microsoft
        </button>

        <span className='text-[12px] font-mono text-slate-600 mt-4 md:mt-5'>Already have an account? <p onClick={() => navigate(`/sign-in`)} className='text-blue-700 underline hover:cursor-pointer'>Sign In here</p></span>
        </div>
        {regError ? 
        <div className='flex flex-row justify-center items-center bottom-0'>
        <SnackBar type={0} message={regErrorMsg} />
      </div>
        : null}
        
    </div>
    </RegistrationContext.Provider>
  )
}

export default SignUp