import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CustomersCharts from './Charts/CustomersCharts'
import PopularBooksChart from './Charts/PopularBooksChart'

const DashboardCenter = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Paper className='flex flex-col h-[335px] p-3' elevation={2}>
                {/* card title */}
                <div className='w-full'>
                    {/* <Typography variant='h6' className='text-slate-900 font-medium tracking-wider'>Customers</Typography> */}
                </div>
                
                <CustomersCharts />
            </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className='flex flex-col h-[335px] p-3' elevation={2}>
                {/* card title */}
                <div className='w-full'>
                    {/* <Typography variant='h6' className='text-slate-900 font-medium tracking-wider'>Most Popular Books</Typography> */}
                </div>
                <PopularBooksChart />
            </Paper>
        </Grid>
    </Grid>
  )
}

export default DashboardCenter