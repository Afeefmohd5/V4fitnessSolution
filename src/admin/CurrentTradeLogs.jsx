import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

function CurrentTradeLogs() {
  const [trades, setTrades] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        // Simulated Nifty dummy data
        const data = [
          { id: 1, symbol: 'NIFTY 50', quantity: 100, price: 17500, status: 'Executed' },
          { id: 2, symbol: 'NIFTY BANK', quantity: 50, price: 38000, status: 'Pending' },
          { id: 3, symbol: 'NIFTY IT', quantity: 20, price: 32000, status: 'Executed' },
        ]
        setTrades(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTrades()
  }, [])

  return (
    <AdminLayout>
      <div className="container my-4">
        <h2>Current Trade Logs</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {!loading && !error && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id}>
                  <td>{trade.symbol}</td>
                  <td>{trade.quantity}</td>
                  <td>{trade.price}</td>
                  <td>{trade.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export default CurrentTradeLogs
