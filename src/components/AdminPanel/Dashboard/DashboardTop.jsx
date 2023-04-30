import { Add, MonetizationOn, ShoppingBasket, Visibility } from '@mui/icons-material'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import DashboardCharts from './Charts/DashboardCharts'

const DashboardTop = () => {
    const cardItems = [
        {name: "Orders", value: "1350", icon: <ShoppingBasket />},
        {name: "Revenue", value: "10", icon: <MonetizationOn />},
        {name: "Conversion", value: "10", icon: <Add />},
        {name: "Visitors", value: "10", icon: <Visibility />},
    ]
  return (
    <Grid container spacing={2}>
        {cardItems.map((card) => 
            <Grid item xs={3}>
            <Paper elevation={2} className='p-[1rem] min-h-[200px]'>
                <Box className='w-full h-9 flex gap-2 items-center'>{card.icon}
                    <Typography variant='h5' className='text-sm'>{card.name}</Typography>
                </Box>
                <Box className='w-full flex gap-2 items-center mt-3 relative'>
                    <Typography variant='h5' className='text-sm font-semibold'>{card.value}</Typography>
                    {/* charts need to be here*/}
                    <DashboardCharts type={card.name}/>
                </Box>
            </Paper>
            </Grid>
        )}
        
    </Grid>
  )
}

export default DashboardTop