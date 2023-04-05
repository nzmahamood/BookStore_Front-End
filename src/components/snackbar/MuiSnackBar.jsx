import { Alert, Snackbar } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideMessage } from '../../contexts/store/SnackSlice'

const MuiSnackBar = ({open, severity, handleClose, message}) => {
  const dispatch = useDispatch()
    useEffect(()=>{
        console.log('openstate', open)
        
    },[open])
  return (
    <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => dispatch(hideMessage())}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert variant='filled' severity={severity} onClose={() => dispatch(hideMessage())}>
          {message}
        </Alert>
      </Snackbar>
  )
}

export default MuiSnackBar