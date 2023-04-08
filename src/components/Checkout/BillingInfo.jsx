import React from 'react'
import { Grid, Checkbox, FormControlLabel, FormControl, FormHelperText, MenuItem, Select, Typography, InputLabel, TextField } from '@mui/material'
import FormInput from './FormInput'

const BillingInfo = () => {
  return (
    <>
        <Grid item xs={12} md={10}>
            <Typography variant='h3' className='font-inter font-medium tracking-wider text-[19px] text-slate-900'>Billing Address</Typography>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='bfirstname' label='First Name' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='blastname' label='Last Name' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth name='bphone' label='Phone Number' className='w-full' />
        </Grid>
        <Grid item xs={12} md={5}>
            <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
        fullWidth
            name='bcountry'
            label="Country"
            defaultValue={'United Kingdom'}
            >
            <MenuItem value={'United Kingdom'}>United Kingdom (UK)</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='bcity' label='City' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth name='bpostcode' label='Post Code' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth name='bstreetaddress' placeholder='House No: and Street' label='Street Address' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth multiline rows={3} placeholder='Special Notes' name='bnotes' label='Special Notes (Optional)' />
        </Grid>
    </>
  )
}

export default BillingInfo