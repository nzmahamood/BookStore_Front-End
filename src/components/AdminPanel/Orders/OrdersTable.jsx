import React, { useEffect, useState } from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { Avatar, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { Edit, LocalShipping, Visibility } from '@mui/icons-material';
import { blue, deepOrange, green, red } from '@mui/material/colors';
import axios from 'axios';
import { BASE_URL_NET } from "../../../utils/domains";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export default function AllOrders() {
    const [apiData, setApiData] = useState([])
    const {access_token} = useSelector((state) => state.token)
    const navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: '#ID',sortable: false, flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'customer', headerName: 'Customer',sortable: false, width: 190, headerAlign: 'center', align: 'center',
          renderCell: (params) => {
              return (
                <>
                  <Avatar className='mr-2'>{params.value.avatar}</Avatar>
                  {params.value.title}
                </>
              )}
       },
        {
          field: 'totalprice',
          headerName: 'Total Price',
          type: 'number',
          sortable: false,
          headerAlign: 'center',
          flex: 1,
          align: 'center'
        },
        {
          field: 'date',
          headerName: 'Date',
          sortable: false,
          headerAlign: 'center',
          flex: 1,
          align: 'center',
        },
        {
          field: 'status',
          headerName: 'Status',
          sortable: false,
          headerAlign: 'center',
          flex: 1,
          align: 'center',
        },
        {
          field: 'actions',
          headerName: 'Actions',
          sortable: false,
          headerAlign: 'center',
          flex: 1,
          align: 'center',
          renderCell: (params) => {
            
            return (
              <div className='w-full flex justify-around'>
                  <Tooltip title="View Order"><IconButton onClick={()=>{handleViewOrder(params.value)}}><Visibility fontSize='small' style={{color: blue[500]}} /></IconButton></Tooltip>
                  <Tooltip title="Edit"><Edit fontSize='small' style={{color: green[500]}} /></Tooltip>
                  <Tooltip title="Delete Order"><GridDeleteIcon fontSize='small' style={{color: red[500]}}/></Tooltip>
              </div>
            )}
        }
      ];

      const handleViewOrder = (id) => {
        const order = apiData.find((item) => item.id === id);
        navigate(`/admin/orders/view/${id}`, { state: { order } });
    }

    useEffect(()=>{
        axios.get(`${BASE_URL_NET}/admin-api/api/retrieve-orders`, {
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
        .then((response) => {
            setApiData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[access_token])

    const tableRows = apiData?.map((item) => ({ id: item.order_number, customer: { avatar: item.customer.name.charAt(0).toUpperCase(), title: item.customer.email }, totalprice: item.total_amount, date: new Date(item.created_at).toLocaleDateString(), status: "Delivered", actions: item.id }))
  return (
    <Paper elevation={2} style={{ height: '100%', width: '100%' }}>
        <div className='w-full p-3'><Typography variant='h6' >All Orders</Typography></div>
      <DataGrid
        rows={tableRows}
        columns={columns}
        pageSize={5}
        autoHeight={true}
        checkboxSelection
      />
    </Paper>
  );
}