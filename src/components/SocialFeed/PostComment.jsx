import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL_NET } from '../../utils/domains'
import { showMessage } from '../../contexts/store/SnackSlice'

const PostComment = ({id}) => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const {access_token} = useSelector((state) => state.token)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(content)
    axios.post(`${BASE_URL_NET}/socialfeed/api/add-comment/${id}/`, {content: content}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      
      dispatch(showMessage({message: "Comment Posted", severity: "success"}))
      console.log(response.data)
      window.location.reload()
    })
    .catch(error => {
      console.log('comment-error', error)
      const errorMessage = error.response ? error.response.data.message : 'Unknown error'
      dispatch(showMessage({message: errorMessage, severity: "error"}))
      console.log(errorMessage)
    })
  }

  return (
    <Box className='w-full mb-5 flex flex-col items-end'>
        <div className='w-full pl-3 pb-1'><Typography variant='body'>Post a comment</Typography></div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-end'>
        <TextField value={content} onChange={(e) => {setContent(e.target.value)}} className='w-full' variant='outlined' multiline />
        <Button className='bg-teal-700 text-white mt-1' variant='filled' type='submit'>Post</Button>
        </form>
    </Box>
  )
}

export default PostComment