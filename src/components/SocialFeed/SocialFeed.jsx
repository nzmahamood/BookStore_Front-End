import { Comment, ThumbUp } from '@mui/icons-material'
import { Avatar, Box, Container, IconButton, Paper, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'

const SocialFeed = () => {
    const [openComment, setOpenComment] = useState(false)
    const handleOpenComment = () =>{
        console.log('clicked')
        setOpenComment(true)
    }
  return (
    <Container maxWidth='md'>
        <Paper elevation={2} className='w-full min-h-screen py-2 mt-5 bg-white'>
        <Box className='w-full h-9 text-center mt-6'>
            <Typography variant='h4'>Social Feed</Typography>
        </Box>
        <Container maxWidth='sm' className='pt-10'>
            {/* post */}
            <Box className='w-full border border-[silver] p-3 rounded-lg'>
                {/* post header */}
            <Box className='w-full relative mt-5 flex items-center py-2 border-b border-slate-900'>
                <Avatar sx={{ width: 41, height: 41, bgcolor: deepOrange[500] }}>U</Avatar>
                <Typography variant='h6' className='ml-3'>UserName</Typography>
            </Box>
            {/* post content */}
            <Box className='w-full flex flex-col py-2'>
                <Typography variant='body'>Try out this books, its great.</Typography>
                <div className='w-full flex justify-center py-3'>
                <img src='http://books.google.com/books/content?id=jECp6elJjE4C&printsec=frontcover&img=1&zoom=1&source=gbs_api' alt='post_image' className='w-[150px] h-[200px]'/>
                </div>
            </Box>
            {/* post toolbar */}
            <Box className='w-full flex h-9 border-b border-t border-[silver]'>
                <div className='w-[50%] border-r border-[silver] flex justify-center'>
                <IconButton aria-label="Like" color="" onClick={() => {console.log('clciked')}}>
                    <ThumbUp />
                </IconButton>
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
                <div className='w-full p-3 border border-[silver] rounded-lg shadow-md'>
                    <Box className='flex w-full'>
                        <div className='w-[25%] h-full flex justify-center items-center'>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>U</Avatar>
                        </div>
                        <div className='flex-1'>
                            <Typography variant='body'>
                                This is a test comment on social feed of online booksore.
                            </Typography>
                        </div>
                    </Box>
                </div>
            </div>)
            }
            
            </Box>
        </Container>
        </Paper>
    </Container>
  )
}

export default SocialFeed