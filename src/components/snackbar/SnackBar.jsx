import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageReducer } from '../../contexts/store/RegistrationSlice'

function SnackBar({message, type}) {
const registrationStatus = useSelector(state => state.registration.success)
const [msgType, setMsgType] = useState(false)
const errorSymbol = require('../../assets/error-symbol.svg')

if(type === 1){
    setMsgType(true)
}
  const dispatch = useDispatch()
    useEffect(()=>{
        
        if(registrationStatus){
          console.log(registrationStatus)
          const timeoutId = setTimeout(() => {
            // Function to execute after 5 seconds
            dispatch(messageReducer({success: false, successMessage: ""}))
          }, 5000);
      
          return () => clearTimeout(timeoutId);
          
        }
      }, [registrationStatus, dispatch])
    
  return (
    <div className='bottom-3 fixed'>
        <div className={`max-w-xs bg-slate-50 border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700`} role="alert">
  <div className="flex p-4">
    <div className={`inline-flex items-center justify-center flex-shrink-0 w-6 h-6 ${msgType ? 'text-green-600 bg-green-100':'text-red-600 bg-red-100'}rounded-lg`}>
    { msgType ? 
      <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      :
      <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    
    }
      
    </div>
    <div className="ml-3">
      <p className="text-sm font-serif text-gray-700 dark:text-gray-400">
        {message}
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default SnackBar