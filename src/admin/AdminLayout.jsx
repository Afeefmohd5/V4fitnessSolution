import React from 'react'
import AdminNavbar from './AdminNavbar'
import './AdminLayout.css'
import { TradeProvider } from './TradeContext'

function AdminLayout({ children }) {
  return (
    <TradeProvider>
      <div className="admin-layout d-flex">
        <AdminNavbar />
        <main className="admin-content flex-grow-1">
          {children}
        </main>
      </div>
    </TradeProvider>
  )
}

export default AdminLayout
