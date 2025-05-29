import React, { useState, useEffect } from 'react'
import AdminLayout from './AdminLayout'

function Quantity() {
  const [quantities, setQuantities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch quantity data
    const fetchQuantities = async () => {
      setLoading(true)
      setError(null)
      try {
        // Replace this URL with actual API endpoint when available
        const response = await fetch('/api/quantities')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setQuantities(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchQuantities()
  }, [])

  return (
    <AdminLayout>
      <div className="container my-4">
        <h2>Quantity</h2>
        {loading && <p>Loading quantity data...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {!loading && !error && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {quantities.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center">No quantity data available</td>
                </tr>
              ) : (
                quantities.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export default Quantity
