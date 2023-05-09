import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const AdminBooks = () => {
  return (
    <Container maxWidth='lg'>
        <div className='w-full flex flex-col gap-2 items-center'>
            <div className='w-full flex justify-center'>
                <Typography variant='h6'>Add Books</Typography>
            </div>

            <div className='w-full flex justify-center'>
                {/* <Typography variant='h6'>Add Books</Typography> */}
            </div>
            <form className='w-[50%] mt-9'>
                <Grid container maxWidth='md' spacing={2}>
                    <Grid item xs={6}>
                        <TextField variant='outlined' name='isbn10' label='ISBN (10)' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField variant='outlined' name='isbn13' label='ISBN (13)' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField fullWidth variant='outlined' name='title' label='Book Title' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField fullWidth variant='outlined' name='authors' label='Authors' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField variant='outlined' name='average_rating' label='Price' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField variant='outlined' name='num-pages' label='No: Of pages' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField fullWidth variant='outlined' name='thumbnail' label='Cover Image (URL only)' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField fullWidth variant='outlined' name='categories' label='Category Keywords' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField fullWidth multiline variant='outlined' name='description' label='Description' />
                    </Grid>

                    <Grid item xs={11}>
                        <Button variant='filled' className='bg-blue-700 text-white hover:text-blue-600' type='submit' fullWidth>Submit</Button>
                    </Grid>
                </Grid>
                </form>
            
        </div>
    </Container>
  )
}

export default AdminBooks