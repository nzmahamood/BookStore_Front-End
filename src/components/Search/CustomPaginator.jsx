import { Pagination, PaginationItem } from '@mui/material'
import React from 'react'

const CustomPaginator = ({totalPages, currentPage, pagination}) => {
    const handleClick = (event, page) => {
        pagination(page);
      };
  return (
    <Pagination size='small' color='primary' count={totalPages} page={currentPage} shape="rounded" onChange={handleClick} renderItem={(item) =>(<PaginationItem 
        {...item}
        onClick={(e) => handleClick(e, item.page)}
    />)}>

    </Pagination>
  )
}

export default CustomPaginator