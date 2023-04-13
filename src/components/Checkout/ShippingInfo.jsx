import React from 'react'
import { Grid, Checkbox, FormControlLabel, FormControl, FormHelperText, MenuItem, Select, Typography, InputLabel, TextField } from '@mui/material'
import FormInput from './FormInput'

const ShippingInfo = ({handleChange, shipping, error}) => {
  return (
    <>
        <Grid item xs={12} md={10}>
            <Typography variant='h3' className='font-inter font-medium tracking-wider text-[19px] text-slate-900'>Shipping Address</Typography>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth value={shipping.firstname} error={Boolean(error.firstname)} helperText={error.firstname} onChange={handleChange} name='firstname' label='First Name' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth value={shipping.lastname} error={Boolean(error.lastname)} helperText={error.lastname} onChange={handleChange} name='lastname' label='Last Name' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth value={shipping.phone} error={Boolean(error.phone)} helperText={error.phone} onChange={handleChange} name='phone' label='Phone Number' className='w-full' />
        </Grid>
        <Grid item xs={12} md={5}>
            <FormControl fullWidth>
                <Select
        fullWidth
            name='country'
            value={shipping.country} error={Boolean(error.country)} helperText={error.country}
            defaultValue={''}
            onChange={handleChange}
            >
            <MenuItem value={'United Kingdom'}>United Kingdom (UK)</MenuItem>
        </Select>
        <FormHelperText>{error.country && error.country}</FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField value={shipping.city} error={Boolean(error.city)} helperText={error.city} onChange={handleChange} fullWidth name='city' label='City' />
        </Grid>
        <Grid item xs={6} md={5}>
            <TextField fullWidth value={shipping.postcode} error={Boolean(error.postcode)} helperText={error.postcode} onChange={handleChange} name='postcode' label='Post Code' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth value={shipping.streetaddress} error={Boolean(error.streetaddress)} helperText={error.streetaddress} onChange={handleChange} name='streetaddress' placeholder='House No: and Street' label='Street Address' />
        </Grid>
        <Grid item xs={12} md={5}>
            <TextField fullWidth multiline value={shipping.notes} error={Boolean(error.notes)} helperText={error.notes} onChange={handleChange} rows={3} placeholder='Special Notes' name='notes' label='Special Notes (Optional)' />
        </Grid>
        
    </>
  )
}

export default ShippingInfo