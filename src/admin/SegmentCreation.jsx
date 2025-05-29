import React, { useEffect, useState, useContext } from 'react'
import UserManagementTopNavbar from './UserManagementTopNavbar'
import AdminLayout from './AdminLayout'
import { SegmentCategoryContext } from './SegmentCategoryContext'

function SegmentCreation() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { userCategories, setUserCategory } = useContext(SegmentCategoryContext)
  const [showCategorySelector, setShowCategorySelector] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('0-10k')

  // Placeholder for API call - currently using mock data
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      try {
        // Mock data
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com', capital: 10000 },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', capital: 15000 },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', capital: 12000 },
        ]
        setUsers(mockUsers)
        setLoading(false)
      } catch (err) {
        setError('Failed to load user data.')
        setLoading(false)
      }
    }, 1000)
  }, [])

  const categories = ['0-10k', '10k-20k', '20k-50k', '50k-1l']

  const openCategorySelector = (userId) => {
    setShowCategorySelector(userId)
    setSelectedCategory(userCategories[userId] || '0-10k')
  }

  const saveCategory = (userId) => {
    setUserCategory(userId, selectedCategory)
    setShowCategorySelector(null)
  }

  return (
    <AdminLayout>
      <UserManagementTopNavbar />
      <div className="container my-4">
        <h2>Segment Creation</h2>
        {loading && <p>Loading user data...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Capital</th>
                  <th>Segment</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>${user.capital.toLocaleString()}</td>
                    <td>
                      {showCategorySelector === user.id ? (
                        <>
                          <select
                            className="form-select form-select-sm d-inline w-auto me-2"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          >
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                          <button
                            className="btn btn-sm btn-primary me-2"
                            onClick={() => saveCategory(user.id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => setShowCategorySelector(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span>{userCategories[user.id] || 'Uncategorized'}</span>
                          <button
                            className="btn btn-sm btn-outline-primary ms-2"
                            onClick={() => openCategorySelector(user.id)}
                          >
                            Segments
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default SegmentCreation
