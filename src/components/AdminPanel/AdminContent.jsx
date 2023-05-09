import React from 'react'
import AdminNavbar from './AdminNavbar'
import {  useRoutes } from 'react-router-dom'
import Orders from './Orders/Orders'
import Dashboard from './Dashboard/Dashboard'
import BreadComponent from './BreadComponent'
import ViewOrder from './Orders/ViewOrder'
import AdminBooks from './Books/AdminBooks'


const AdminContent = () => {
  const routes = [
    {path: '/orders', element: <Orders />, name: 'Orders'},
    {path: '/orders/view/:id', element: <ViewOrder />, name: 'Orders'},
    {path: '/books', element: <AdminBooks />, name: 'Books'},
    {path: '/', element: <Dashboard />, name: 'Dashboard'},
    {path: '*', element: <Dashboard />, name: 'Dashboard'},
  ]

  const whatRoute = useRoutes(routes)

  const breadName = whatRoute.props.match.route.name ? whatRoute.props.match.route.name : null

  return (
    <>
    <AdminNavbar />
    <main className='relative px-6 top-[6rem]'>
      <div className='flex w-full h-9'><BreadComponent info={breadName}/></div>
    {whatRoute}
    </main>
    </>
  )
}

export default AdminContent