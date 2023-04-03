import { Container } from '@mui/material'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ContainerBook from './ContainerBook';

const MainContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className='relative bg-white min-h-[500px] flex flex-col rounded-lg border border-[silver] drop-shadow-lg top-5' fixed>
        <Box className='relative w-full top-0 bg-transparent h-[50px] md:h-[90px] flex items-center border-b border-slate-900'>
        <div className='float-left h-auto font-inter font-semibold text-slate-900 text-[14px] md:text-[24px] pl-1 md:pl-3'><span>Category Name</span></div>
            <div className='float-right h-auto absolute right-0 flex items-center pr-2'>
                {/* <button className='bg-teal-700 text-white font-inter font-regular text-xs p-2 md:text-[16px] w-[102px] md:w-[121px] rounded'>View More</button> */}
                <Button variant='contained' size='small' className='bg-teal-700 font-inter'>View More</Button>
            </div>
        </Box>
        <ContainerBook />
      </Container>
    </React.Fragment>
  )
}

export default MainContainer