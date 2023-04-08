import React from 'react'
import { Grid, Checkbox, FormControlLabel, FormControl, FormHelperText, MenuItem, Select, Typography, InputLabel, TextField } from '@mui/material'
import FormInput from './FormInput'

const ShippingInfo = () => {
  return (
    <>
        <Grid item xs={12} md={10}>
            <Typography variant='h3' className='font-inter font-medium tracking-wider text-[19px] text-slate-900'>Shipping Address</Typography>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='firstname' label='First Name' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='lastname' label='Last Name' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth name='phone' label='Phone Number' className='w-full' />
        </Grid>
        <Grid item xs={12} md={5}>
            <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
        fullWidth
            name='country'
            defaultValue={'United Kingdom'}
            >
            <MenuItem value={'United Kingdom'}>United Kingdom (UK)</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='city' label='City' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='postcode' label='Post Code' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth name='streetaddress' placeholder='House No: and Street' label='Street Address' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth multiline rows={3} placeholder='Special Notes' name='notes' label='Special Notes (Optional)' />
        </Grid>
        
    </>
  )
}

export default ShippingInfo