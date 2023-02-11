import React, { useEffect } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const { access_token } = useSelector(state => state.token)

  // useEffect(() => {
  //   if (!access_token) {
  //     return <Navigate to='/sign-in' />
  //   }
  // }, [access_token])

  return (
    access_token ? <Outlet /> : <Navigate to='/sign-in' />
  )
}

export default PrivateRoute