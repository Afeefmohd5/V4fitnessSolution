import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import TradeExecutionTopNavbar from './TradeExecutionTopNavbar'

function TradeExecution() {
  return (
    <AdminLayout>
      <TradeExecutionTopNavbar />
      <Outlet />
    </AdminLayout>
  )
}

export default TradeExecution
