import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddPost = () => {
    const [image, setImage] = useState(null)
    const [content, setContent] = useState('')

    const handlePost = (e) => {
        e.preventDefault()

        console.log('image', image)
        console.log('content', content)
    }
  return (
    <Container maxWidth='md'>
        <Paper elevation={2} className='w-full min-h-screen py-2 mt-5 bg-white'>
        <Box className='w-full h-9 text-center mt-6'>
            <Typography variant='h4'>Add New Post</Typography>

        </Box>
        <form onSubmit={handlePost}>
        <Container maxWidth='sm' className='flex flex-col gap-2 mt-10'>
            
            <TextField variant='outlined' id='content' value={content} onChange={(e) => setContent(e.target.value)} label='Content' multiline />
            <input type='file' id='image' onChange={(e) => setImage(e.target.files[0])} />
            <Button variant='filled' className='bg-teal-700 text-white' type='submit'>Post</Button>
            
        </Container>
        </form>
        </Paper>
    </Container>
  )
}

export default AddPost