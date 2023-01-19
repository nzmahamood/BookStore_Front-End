import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateAcceptTerms } from './form_validations';

const SignUp = () => {
  document.title = "Sign-Up || BookStore"
  const navigate = useNavigate()

  //hooks for form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  const [acceptterms, setAcceptTerms] = useState(true)

  //hook for validation
  const [validateFormError, setValidateFormError] = useState({})

  //form submit
  const handleSignupSumbit = (e) =>{
    e.preventDefault()

    let formerrors = {}

    formerrors.name = validateName(name)
    formerrors.email = validateEmail(email)
    formerrors.password = validatePassword(password)
    formerrors.confirmpass = validateConfirmPassword(password, confirmpass)
    formerrors.acceptterms = validateAcceptTerms(acceptterms)

    setValidateFormError(formerrors)

    if(Object.values(formerrors).every(val => val === '')){
      console.log("Done")
      alert('Form Submitted')
      navigate('/')
    }
  }

  const ms_logo = require('../../assets/ms-logo.png')
    useEffect(() => {
        //setting scroll to top of the page
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-y-scroll no-scrollbar'>
      <div className='p-2 pr-3 pl-3 bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg mt-12'>
            <h2 className='text-3xl font-bold tracking-widest font-serif text-slate-500'>Book<span className='font-semibold text-slate-600 font-mono'>Store</span></h2>
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

        <span className='text-[10px] font-mono text-slate-600 mt-4 md:mt-5'>Already have an account? <a href='/sign-in' className='text-blue-700 underline'>Sign In here</a></span>
        </div>
    </div>
  )
}

export default SignUp