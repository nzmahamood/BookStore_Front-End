import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const BreadComponent = ({info}) => {
  return (
    <div role="presentation">
    <Breadcrumbs aria-label="breadcrumb" seperator=">">
      <Link underline="hover" color="inherit" href="/">
        Admin Panel
      </Link>
      <Typography color="text.primary">{info && info}</Typography>
    </Breadcrumbs>
  </div>
  )
}

export default BreadComponent