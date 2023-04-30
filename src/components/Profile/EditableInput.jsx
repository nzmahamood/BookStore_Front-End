import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL_NET } from '../../utils/domains'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from '../../contexts/store/SnackSlice'

const EditableInput = ({type}) => {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState()
    const {access_token} = useSelector((state) => state.token)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState()
    const dispatch = useDispatch()

    useEffect(()=>{
        setLoading(true)
        axios.post(`${BASE_URL_NET}/order/api/retrieve-info/`, {"type": type}, {
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${access_token}`
              }
        })
        .then((response) => {
            setData(response.data)
            setStatus(response.status)
            setLoading(false)
            
        })
        .catch((error) =>{
            console.log('error', error)
        })
    },[access_token, type])

    if(status === 404){
        return (
            <div className='w-full flex items-center justify-center'>
                <Typography variant='h6' className='font-inter text-slate-600'>
                    Your Address Informations will appear here after your first order.
                </Typography>
            </div>
        )
    }

    const handleUpdate = () => {
        axios.put(`${BASE_URL_NET}/order/api/retrieve-info/`, {"type": type, "address_info": data}, {
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${access_token}`
              }
        })
        .then((response) => {
            setData(response.data)
            setEdit(!edit)
            dispatch(showMessage({message: `${type.charAt(0).toUpperCase() + type.slice(1)} Information Updated Successfully`, severity:'success'}))

        })
        .catch((error) => {
            console.log('update_error', error)
            dispatch(showMessage({message: `Something went wrong, Please try later`, severity:'error'}))
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

  return (
    <>
    { !loading ?
    <Grid container spacing={2}>
        <div className='w-full flex items-center justify-end'>
            <label className='font-inter text-slate-900' htmlFor='edit'>Edit Info</label>
                <Switch name='edit' aria-label='Edit Info' checked={edit} onChange={() => setEdit(!edit)}/>
        </div>
        <Grid item xs={10} md={6}>
            <InputLabel htmlFor='first_name'>First Name</InputLabel>
            <TextField id='first_name' onChange={handleChange} value={data?.first_name} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='first_name'/>
        </Grid>
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='last_name'>Last Name</InputLabel>
            <TextField id='last_name' onChange={handleChange} value={data?.last_name} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='last_name'/>
        </Grid>
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='Phone'>Phone</InputLabel>
            <TextField value={data?.phone} onChange={handleChange} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='phone'/>
        </Grid>
        
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='country'>Country</InputLabel>
        <FormControl id='country' fullWidth>
          
          <Select
            fullWidth
            name="country"
            id='country'
            inputProps={{readOnly: !edit}}
            value={data?.country}
            onChange={handleChange}
            defaultValue={""}
          >
            <MenuItem value={"United Kingdom"}>United Kingdom (UK)</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>
        </Grid>
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='city'>City</InputLabel>
            <TextField onChange={handleChange} id='city' value={data?.city} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='city'/>
        </Grid>
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='post_code'>Post Code</InputLabel>
            <TextField id='post_code' onChange={handleChange} value={data?.post_code} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='post_code'/>
        </Grid>
        <Grid item xs={10} md={6}>
        <InputLabel htmlFor='street_address'>Street Address</InputLabel>
            <TextField id='street_address' onChange={handleChange} value={data?.street_address} inputProps={{readOnly: !edit}} fullWidth variant='outlined' name='street_address'/>
        </Grid>
        <Grid item xs={6} md={10}>
            {edit && <Button onClick={()=> handleUpdate()} variant='contained' className='bg-teal-700'>Save Changes</Button>}
        </Grid>
    </Grid>
    : <div className='w-full flex items-center justify-center'>
            <Typography variant='h5' className='font-inter'>Loading {type.charAt(0).toUpperCase() + type.slice(1)} Informations ...</Typography>
        </div>}
    </>
  )
}

export default EditableInput