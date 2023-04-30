import { Grid, Paper } from '@mui/material'
import React from 'react'
import AllOrders from './OrdersTable'

const Orders = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          <AllOrders />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Orders