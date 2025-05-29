import React, { useState, useEffect, useContext } from 'react'
import AdminLayout from './AdminLayout'
import { TradeContext } from './TradeContext'

function OptionChain() {
  const { transactionType, setTransactionType, selectedStock, setSelectedStock } = useContext(TradeContext)

  // State for Nifty and Sensex data with name field
  const [niftyData, setNiftyData] = useState([])
  const [sensexData, setSensexData] = useState([])

  // Placeholder useEffect for future API calls
  useEffect(() => {
    // TODO: Fetch Nifty data from backend API
    // For now, using mock data
    const mockNiftyData = [
      { name: 'NIFTY 15000 CE', strikePrice: 15000, callOI: 1200, putOI: 800, price: 100, symbolToken: 'NIFTY15000CE' },
      { name: 'NIFTY 15100 CE', strikePrice: 15100, callOI: 1100, putOI: 900, price: 105, symbolToken: 'NIFTY15100CE' },
      { name: 'NIFTY 15200 CE', strikePrice: 15200, callOI: 1300, putOI: 700, price: 110, symbolToken: 'NIFTY15200CE' },
    ]
    setNiftyData(mockNiftyData)

    // TODO: Fetch Sensex data from backend API
    // For now, using mock data
    const mockSensexData = [
      { name: 'SENSEX 50000 CE', strikePrice: 50000, callOI: 2000, putOI: 1500, price: 200, symbolToken: 'SENSEX50000CE' },
      { name: 'SENSEX 50500 CE', strikePrice: 50500, callOI: 2100, putOI: 1400, price: 210, symbolToken: 'SENSEX50500CE' },
      { name: 'SENSEX 51000 CE', strikePrice: 51000, callOI: 1900, putOI: 1600, price: 220, symbolToken: 'SENSEX51000CE' },
    ]
    setSensexData(mockSensexData)
  }, [])

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value)
  }

  const handleCheckboxChange = (item) => {
    if (selectedStock && selectedStock.name === item.name) {
      setSelectedStock(null) // unselect if already selected
    } else {
      setSelectedStock(item)
    }
  }

  return (
    <AdminLayout>
      <div className="my-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2>Option Chain</h2>

        <div className="mb-3">
          <label htmlFor="transactionTypeSelect" className="form-label">Transaction Type</label>
          <select
            id="transactionTypeSelect"
            className="form-select"
            value={transactionType}
            onChange={handleTransactionTypeChange}
          >
            <option value="BUY">Buy</option>
            <option value="SELL">Sell</option>
          </select>
        </div>

        <section>
          <h3>Nifty Option Chain</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Active</th>
                <th>Name</th>
                <th>Strike Price</th>
                <th>Call OI</th>
                <th>Put OI</th>
                <th>Price</th>
                <th>Symbol Token</th>
              </tr>
            </thead>
            <tbody>
              {niftyData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">No data available</td>
                </tr>
              ) : (
                niftyData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedStock?.name === item.name}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.strikePrice}</td>
                    <td>{item.callOI}</td>
                    <td>{item.putOI}</td>
                    <td>{item.price}</td>
                    <td>{item.symbolToken}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>

        <section className="mt-5">
          <h3>Sensex Option Chain</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Active</th>
                <th>Name</th>
                <th>Strike Price</th>
                <th>Call OI</th>
                <th>Put OI</th>
                <th>Price</th>
                <th>Symbol Token</th>
              </tr>
            </thead>
            <tbody>
              {sensexData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">No data available</td>
                </tr>
              ) : (
                sensexData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedStock?.name === item.name}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.strikePrice}</td>
                    <td>{item.callOI}</td>
                    <td>{item.putOI}</td>
                    <td>{item.price}</td>
                    <td>{item.symbolToken}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
    </AdminLayout>
  )
}

export default OptionChain
