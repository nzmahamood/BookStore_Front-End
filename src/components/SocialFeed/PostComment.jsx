import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const PostComment = ({id}) => {
  return (
    <Box className='w-full mb-5 flex flex-col items-end'>
        <div className='w-full pl-3 pb-1'><Typography variant='body'>Post a comment</Typography></div>
        <TextField className='w-full' variant='outlined' multiline />
        <Button className='bg-teal-700 text-white mt-1' variant='filled'>Post</Button>
    </Box>
  )
}

export default PostComment