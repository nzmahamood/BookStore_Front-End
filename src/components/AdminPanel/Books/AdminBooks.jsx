import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL_NET } from '../../../utils/domains'
import { useDispatch, useSelector } from 'react-redux'

const AdminBooks = () => {

    const {access_token} = useSelector((state) => state.token)

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        isbn10: '',
        isbn13: '',
        title: '',
        authors: '',
        average_rating: '',
        num_pages: '',
        thumbnail: '',
        categories: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)

        axios.post(`${BASE_URL_NET}/admin-api/api/add-books/`, formData,  {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${access_token}`
            }
          })
          .then(response => {
            console.log(response)
            
          })
          .catch(error => {
            console.log(error)
          })
    }
  return (
    <Container maxWidth='lg'>
        <div className='w-full flex flex-col gap-2 items-center'>
            <div className='w-full flex justify-center'>
                <Typography variant='h6'>Add Books</Typography>
            </div>

            <div className='w-full flex justify-center'>
                {/* <Typography variant='h6'>Add Books</Typography> */}
            </div>
            <form className='w-[50%] mt-9' onSubmit={handleSubmit}>
                <Grid container maxWidth='md' spacing={2}>
                    <Grid item xs={6}>
                        <TextField value={formData.isbn10} onChange={handleChange} variant='outlined' name='isbn10' label='ISBN (10)' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField value={formData.isbn13} onChange={handleChange} variant='outlined' name='isbn13' label='ISBN (13)' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField value={formData.title} onChange={handleChange} fullWidth variant='outlined' name='title' label='Book Title' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField value={formData.authors} onChange={handleChange} fullWidth variant='outlined' name='authors' label='Authors' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField value={formData.average_rating} onChange={handleChange} variant='outlined' name='average_rating' label='Price' />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField value={formData.num_pages} onChange={handleChange} variant='outlined' name='num_pages' label='No: Of pages' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField value={formData.thumbnail} onChange={handleChange} fullWidth variant='outlined' name='thumbnail' label='Cover Image (URL only)' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField value={formData.categories} onChange={handleChange} fullWidth variant='outlined' name='categories' label='Category Keywords' />
                    </Grid>

                    <Grid item xs={11}>
                        <TextField value={formData.description} onChange={handleChange} fullWidth multiline variant='outlined' name='description' label='Description' />
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