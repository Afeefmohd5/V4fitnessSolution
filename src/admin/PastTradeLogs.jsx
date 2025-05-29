import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'

function PastTradeLogs() {
  const [trades, setTrades] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        // Simulated purchased trades data
        const data = [
          { id: 1, symbol: 'AAPL', quantity: 100, price: 145, purchaseDate: '2023-05-01' },
          { id: 2, symbol: 'MSFT', quantity: 50, price: 300, purchaseDate: '2023-04-15' },
          { id: 3, symbol: 'GOOGL', quantity: 20, price: 2700, purchaseDate: '2023-03-20' },
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
        <h2>Past Trade Logs</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {!loading && !error && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id}>
                  <td>{trade.symbol}</td>
                  <td>{trade.quantity}</td>
                  <td>{trade.price}</td>
                  <td>{trade.purchaseDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export default PastTradeLogs
