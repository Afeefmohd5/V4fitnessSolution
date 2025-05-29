import React from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'
import AdminLayout from './AdminLayout'

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="container my-5">
        <h2 className="mb-4">Admin Dashboard</h2>

        <div className="card shadow p-4 rounded mb-4">
          <h4>Profit / Loss (P/L) Summary</h4>
          <p>
            {/* Placeholder for P/L data - this can be replaced with real data and charts */}
            Total Profit: $12,345.67<br />
            Total Loss: $4,321.00<br />
            Net P/L: $8,024.67
          </p>
        </div>

        <div className="list-group mb-4">
          <Link to="/admin/users" className="list-group-item list-group-item-action">
            Manage Users
          </Link>
          <Link to="/admin/profile" className="list-group-item list-group-item-action">
            Admin Profile
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
