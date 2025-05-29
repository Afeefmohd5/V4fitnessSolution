import React from 'react'
import AdminLayout from './AdminLayout'

function MainTradingPortal() {
  return (
    <AdminLayout>
      <div className="container my-5">
        <h2>Main Trading Portal</h2>
        <p>This is the main trading portal for admin users. Here you can monitor and manage trading activities.</p>
        {/* Add trading tools, charts, and controls here */}
      </div>
    </AdminLayout>
  )
}

export default MainTradingPortal
