import * as React from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { Avatar, Paper, Typography } from '@mui/material';
import { LocalShipping, Visibility } from '@mui/icons-material';
import { blue, deepOrange, red } from '@mui/material/colors';

const columns = [
  { field: 'id', headerName: '#ID',sortable: false, width: 70 },
  { field: 'books', headerName: 'Customer',sortable: false, width: 190,
    renderCell: (params) => {
        return (
          <>
            <Avatar className='mr-2' src={params.value.avatar}></Avatar>
            {params.value.title}
          </>
        )}
 },
  {
    field: 'totalprice',
    headerName: 'Total Price',
    type: 'number',
    sortable: false,
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Date',
    sortable: false,
    width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 130,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 160,
    renderCell: (params) => {
      
      return (
        <div className='w-full flex justify-center'>
          <GridDeleteIcon fontSize='small' style={{color: red[500]}}/>
        </div>
      )}
  }
];



const rows = [
    { id: 1, books: { avatar: "A", title: "Book 1" }, quantity: 2, totalprice: 20, date: "2022-04-22", status: "Delivered", actions: <p>acttion</p> },
    { id: 2, books: { avatar: "A", title: "Book 2" }, quantity: 1, totalprice: 10, date: "2022-04-21", status: "Processing", actions: null },
    { id: 3, books: { avatar: "A", title: "Book 3" }, quantity: 3, totalprice: 30, date: "2022-04-20", status: "Delivered", actions: null },
    { id: 4, books: { avatar: "A", title: "Book 4" }, quantity: 2, totalprice: 20, date: "2022-04-19", status: "Cancelled", actions: null },
    { id: 5, books: { avatar: "A", title: "Book 5" }, quantity: 1, totalprice: 10, date: "2022-04-18", status: "Delivered", actions: null },
    { id: 6, books: { avatar: "A", title: "Book 6" }, quantity: 2, totalprice: 20, date: "2022-04-17", status: "Processing", actions: null },
    { id: 7, books: { avatar: "A", title: "Book 7" }, quantity: 1, totalprice: 10, date: "2022-04-16", status: "Delivered", actions: null },
    { id: 8, books: { avatar: "A", title: "Book 8" }, quantity: 3, totalprice: 30, date: "2022-04-15", status: "Processing", actions: null },
    { id: 9, books: { avatar: "A", title: "Book 9" }, quantity: 2, totalprice: 20, date: "2022-04-14", status: "Delivered", actions: null },
    { id: 10, books: { avatar: "A", title: "Book 10" }, quantity: 1, totalprice: 10, date: "2022-04-13", status: "Cancelled", actions: null },
  ];

export default function RecentOrders() {
  return (
    <Paper elevation={2} style={{ height: 400, width: '100%' }}>
        <div className='w-full p-3'><Typography variant='h6' >Recent Orders</Typography></div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </Paper>
  );
}