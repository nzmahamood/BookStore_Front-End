import { Avatar, Box, Container, IconButton, Paper, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Comment, ThumbUp } from '@mui/icons-material'
import React, { useState } from 'react'
import { BASE_URL_NET } from '../../utils/domains'
import PostComment from './PostComment'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from '../../contexts/store/SnackSlice'
import { error } from 'highcharts'
import { decodeToken } from '../../utils/utils'

const FeedPost = ({data}) => {
    const {access_token} = useSelector((state) => state.token)
    const {name} = decodeToken(access_token)
    const [openComment, setOpenComment] = useState(false)
    const [liked, setLiked] = useState(data?.likes?.some(like => like.user === name))
    const [likeCount, setLikeCount] = useState(data?.likes?.length)
    
    const dispatch = useDispatch()
   

    console.log('likes', data?.likes?.length)

    const handleLikePost = (id) =>{
        console.log('tkn', access_token)
        console.log(id)
        axios.post(`${BASE_URL_NET}/socialfeed/api/like-post/${id}/`, {}, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((response) => {
            const message = response.data? response.data.message : "Post Liked" 
            dispatch(showMessage({message: message, severity: "success"}))
            console.log(response.data)
            setLiked(!liked)
            const count = response?.data?.like ? response?.data?.like.length : 0
            setLikeCount(count)
          })
          .catch(error => {
            console.log('like-error', error)
            const errorMessage = error.response ? error.response.data.message : 'Unknown error'
            dispatch(showMessage({message: errorMessage, severity: "error"}))
            console.log(errorMessage)
          })
    }

    const handleOpenComment = () =>{
        console.log('clicked')
        setOpenComment(true)
    }
  return (
    <>
    <Box className='w-full border border-[silver] p-3 rounded-lg mb-5'>
                {/* post header */}
            <Box className='w-full relative mt-5 flex items-center py-2 border-b border-slate-900'>
                <Avatar sx={{ width: 41, height: 41, bgcolor: deepOrange[500] }}>{data?.user.charAt(0).toUpperCase()}</Avatar>
                <Typography variant='h6' className='ml-3'>{data?.user.charAt(0).toUpperCase() + data?.user.slice(1)}</Typography>
            </Box>
            {/* post content */}
            <Box className='w-full flex flex-col py-2'>
                <Typography variant='body'>{data?.content}</Typography>
                <div className='w-full flex justify-center py-3'>
                    {data?.image? <img src={`${BASE_URL_NET}/${data.image}`} alt='post_image' className='w-[150px] h-[200px]'/>: null}
                
                </div>
            </Box>
            {/* post toolbar */}
            <Box className='w-full flex h-9 border-b border-t border-[silver]'>
                <div className='w-[50%] border-r border-[silver] flex justify-center items-center'>
                <IconButton aria-label="Like" color={liked ? 'primary': ''} onClick={() => {handleLikePost(data?.id)}}>
                    <ThumbUp />
                </IconButton>
                <Typography variant='body'>{likeCount}</Typography>
                </div>
                <div className='w-[50%] flex justify-center' onClick={() => {setOpenComment(!openComment)}}>
                <IconButton aria-label="Comment" color={openComment ? 'primary': ''}>
                    <Comment />
                </IconButton>
                </div>
            </Box>
            {/* comment section */}
            {openComment && 
                (<div className='w-full border border-[silver] p-3'>
                    <PostComment id={data.id} />
                    {data?.comments?.length !== 0 ? data?.comments.map(comment => 
                    <div className='w-full p-3 border border-[silver] rounded-lg shadow-md mb-5'>
                    <Box className='flex w-full'>
                        <div className='w-[25%] h-full flex justify-center items-center'>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>{comment.user.charAt(0).toUpperCase()}</Avatar>
                        </div>
                        <div className='flex-1'>
                            <Typography variant='body'>
                                {comment.content}
                            </Typography>
                        </div>
                    </Box>
                </div>): <p>No Comments</p>
                    }
                
            </div>)
            }
            
            </Box>
            </>
  )
}

export default FeedPost