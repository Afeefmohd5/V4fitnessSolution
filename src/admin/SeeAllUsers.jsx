import React from 'react'
import UserManagementTopNavbar from './UserManagementTopNavbar'
import AdminLayout from './AdminLayout'

function SeeAllUsers() {
  return (
    <AdminLayout>
      <UserManagementTopNavbar />
      <div className="container my-4">
        <h2>See All Users</h2>
        <p>This is the See All Users page.</p>
      </div>
    </AdminLayout>
  )
}

export default SeeAllUsers
