import React from 'react'
import DashboardTop from './DashboardTop'
import DashboardCenter from './DashboardCenter'
import RecentOrders from './RecentOrdersTable'

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full'>
        <section className='w-full py-2'>
            <DashboardTop />
        </section>
        <section className="w-full py-2 mt-4">
          <DashboardCenter />
        </section>
        <section className="w-full py-2 mt-4">
          <RecentOrders />
        </section>
    </div>
  )
}

export default Dashboard