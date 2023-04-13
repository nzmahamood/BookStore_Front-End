import React from 'react'
import { useParams } from 'react-router-dom'

const ListBooks = () => {
    const {category} = useParams()
    
  return (
    <div>ListBooks</div>
  )
}

export default ListBooks