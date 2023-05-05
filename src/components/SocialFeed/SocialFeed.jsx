import { Comment, ThumbUp } from '@mui/icons-material'
import { Avatar, Box, Button, Container, IconButton, Paper, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL_NET } from '../../utils/domains'
import { showMessage } from '../../contexts/store/SnackSlice'
import FeedPost from './FeedPost'

const SocialFeed = () => {
    
    const [posts, setPosts] = useState([])
    const {access_token} = useSelector((state) => state.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [openComment, setOpenComment] = useState(false)

    const handleOpenComment = () =>{
        console.log('clicked')
        setOpenComment(true)
    }
    

    useEffect(()=>{
        if(access_token === null){
            navigate('/sign-in', {state: {from: 'feed'}})
        }
        axios.get(`${BASE_URL_NET}/socialfeed/api/fetch-feed/`, {
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${access_token}`
              }
        })
        .then((response) => {
            setPosts(response.data)
            console.log(response.data)
            console.log('dataa', posts)
        })
        .catch((error) => {
            console.log(error)
            dispatch(showMessage({message: 'Cannot fetch posts', severity: 'success'}))
        })
    },[])
  return (
    <Container maxWidth='md'>
        <Paper elevation={2} className='w-full min-h-screen py-2 mt-5 bg-white'>
        <Box className='w-full h-9 text-center mt-6'>
            <Typography variant='h4'>Social Feed</Typography>

            <div className='w-full flex justify-end px-5'>
            <Link to={'/feed/add-post'}> <Button variant='filled' className='bg-teal-700 text-white'>New Post</Button> </Link>
            </div>
        </Box>
            {/* post */}
            <Container maxWidth='sm' className='pt-10'>
        {/* eachpost */}
        {posts.map(item =>
            <FeedPost key={item.id} data={item}/>
            )}
            {/* endeachpost */}
            </Container>
        
        </Paper>
    </Container>
  )
}

export default SocialFeed