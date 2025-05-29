import React, { useState, useEffect } from 'react'
import AdminLayout from './AdminLayout'

function Market() {
  const [marketData, setMarketData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Replace with actual API endpoint when available
        const response = await fetch('/api/market-prices')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setMarketData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()
  }, [])

  return (
    <AdminLayout>
      <div className="container my-4">
        <h2>Market</h2>
        {loading && <p>Loading market prices...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {!loading && !error && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
              </tr>
            </thead>
            <tbody>
              {marketData.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">No market data available</td>
                </tr>
              ) : (
                marketData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.symbol}</td>
                    <td>{item.price}</td>
                    <td>{item.change}</td>
                    <td>{item.changePercent}</td>
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

export default Market
