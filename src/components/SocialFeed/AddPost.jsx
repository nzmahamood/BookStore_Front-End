import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL_NET } from '../../utils/domains'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showMessage } from '../../contexts/store/SnackSlice'

const AddPost = () => {
    const [image, setImage] = useState(null)
    const [content, setContent] = useState('')
    const {access_token} = useSelector((state) => state.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePost = (e) => {
        e.preventDefault();
      
        if (content) {
          const formValues = new FormData();
          formValues.append('content', content);
          if (image) {
            formValues.append('image', image);
          }
      
          axios
            .post(`${BASE_URL_NET}/socialfeed/api/add-post/`, formValues, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${access_token}`,
              },
            })
            .then((response) => {
              dispatch(
                showMessage({ message: 'Post Created SuccessFully', severity: 'success' })
              );
              navigate('/social-feed');
            })
            .catch((error) => {
              console.log(error);
              dispatch(
                showMessage({ message: 'Cannot Add posts', severity: 'error' })
              );
            });
        }
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