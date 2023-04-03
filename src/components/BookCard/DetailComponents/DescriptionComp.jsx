import { Container, Typography } from '@mui/material'
import React from 'react'
import { Description } from '@mui/icons-material';
const DescriptionComp = ({description}) => {
  return (
    <Container size='small' className='p-0'>
        <div className='py-3 border-b border-[silver]'>
            <Typography variant='h5' className='font-inter text-slate-900'>
                <Description className='mr-1 md:mr-2'/>Description
            </Typography>
        </div>

        <Typography variant='body1' className='font-inter text-slate-900 py-5'>
            {description && description}
        </Typography>
        
    </Container>
  )
}

export default DescriptionComp