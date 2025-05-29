import React, { useContext } from 'react'
import UserManagementTopNavbar from './UserManagementTopNavbar'
import AdminLayout from './AdminLayout'
import { SegmentCategoryContext } from './SegmentCategoryContext'

function AddUserSegment() {
  const { userCategories } = useContext(SegmentCategoryContext)

  // Count users in each category
  const categoryCounts = {
    '0-10k': 0,
    '10k-20k': 0,
    '20k-50k': 0,
    '50k-1l': 0,
  }

  Object.values(userCategories).forEach((category) => {
    if (categoryCounts.hasOwnProperty(category)) {
      categoryCounts[category] += 1
    }
  })

  return (
    <AdminLayout>
      <UserManagementTopNavbar />
      <div className="container my-4">
        <h2>Add User in Segment</h2>
        <div className="card p-3">
          <h5>User Distribution by Capital Segment</h5>
          <ul className="list-group">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <li key={category} className="list-group-item d-flex justify-content-between align-items-center">
                {category}
                <span className="badge bg-primary rounded-pill">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddUserSegment
