import React, { useState, useEffect } from 'react'
import './AccessTrading.css'

function AccessTrading() {
  const [trade, setTrade] = useState({
    symbol: '',
    quantity: '',
    orderType: 'Market',
  })

  const [marketData, setMarketData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMarketData() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('/api/market-data')
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setTrade((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Trade submitted: ' + JSON.stringify(trade, null, 2))
  }

  return (
    <div className="access-trading container my-5">
      <div className="card shadow p-4 rounded mb-4">
        <h3 className="mb-4">Trading Dashboard</h3>
        <p>Monitor your portfolio, execute trades, and analyze market trends.</p>
      </div>

      <div className="card shadow p-4 rounded mb-4">
        <h4>Execute Trade</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="symbol" className="form-label">Stock Symbol</label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              className="form-control"
              value={trade.symbol}
              onChange={handleChange}
              placeholder="Enter stock symbol"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="form-control"
              value={trade.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              min="1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orderType" className="form-label">Order Type</label>
            <select
              id="orderType"
              name="orderType"
              className="form-select"
              value={trade.orderType}
              onChange={handleChange}
            >
              <option value="Market">Market</option>
              <option value="Limit">Limit</option>
              <option value="Stop">Stop</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit Trade</button>
        </form>
      </div>

      <div className="card shadow p-4 rounded">
        <h4>Market Trends</h4>
        {loading && <p>Loading market data...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {marketData && (
          <ul>
            {marketData.map((item) => (
              <li key={item.symbol}>
                <strong>{item.symbol}</strong>: {item.price} USD ({item.change}%)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AccessTrading
