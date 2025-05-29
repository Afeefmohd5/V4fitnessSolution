import React, { useState, useContext, useEffect } from 'react'
import AdminLayout from './AdminLayout'
import { SegmentCategoryContext } from './SegmentCategoryContext'
import { TradeContext } from './TradeContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectUserSegment() {
  const { userCategories } = useContext(SegmentCategoryContext)
  const { transactionType, selectedStock, setTradeOrder } = useContext(TradeContext)

  // Extract unique categories from userCategories
  const categories = Array.from(new Set(Object.values(userCategories)))

  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({
    tradingsymbol: '',
    symbolToken: '',
    transactionType: transactionType,
    exchange: 'NFO',
    orderType: 'MARKET',
    productType: 'INTRADAY',
    duration: 'DAY',
    quantity: 1,
    price: ''
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      transactionType: transactionType
    }))
  }, [transactionType]);

  useEffect(() => {
    if (selectedStock) {
      setFormData(prev => ({
        ...prev,
        tradingsymbol: selectedStock.name || '',
        price: selectedStock.price || '',
        symbolToken: selectedStock.symbolToken || '',
      }))
    }
  }, [selectedStock]);

  const handleSelect = (row) => {
    setSelectedRow(row);
    setFormData({
      ...formData,
      tradingsymbol: `NIFTY${row.strike}CE`,
      symbolToken: row.strike * 10,
    });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleTrade = () => {
    setTradeOrder(formData)
    alert("Trade Executed:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <AdminLayout>
      <div className="d-flex min-vh-100">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{height:'400px', width: '260px', margin: 0, padding: '1rem' }}>
          <h4 className="text-warning mb-3">Segments</h4>
          <div className="mb-3">
            <label>Select Segment</label>
            <select className="form-select">
              {categories.length === 0 ? (
                <option>No categories</option>
              ) : (
                categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))
              )}
            </select>
          </div>
          <div className="mb-3">
            <label>Select Expiry</label>
            <select className="form-select">
              <option>23-jan</option>
              <option>23-feb</option>
              <option>23-mar</option>
              <option>23-april</option>
              <option>23-May</option>
              <option>23-jun</option>
              <option>23-jul</option>
              <option>23-aug</option>
              <option>23-sep</option>
              <option>23-oct</option>
              <option>23-nov</option>
              <option>23-dec</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Select User</label>
            <select className="form-select">
              <option>User 1</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Broker Status</label>
            <input className="form-control" value="Connected" readOnly />
          </div>
        </div>

        {/* Main Section */}
        <div className="flex-grow-1 bg-light" style={{ marginLeft: 0, padding: '1rem' }}>
          {/* Removed Options Chain Dashboard heading and table as requested */}

          {/* Trade Form */}
          <div className="card">
            <div className="card-header bg-success text-white">📈 Place Trade</div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <input name="tradingsymbol" value={formData.tradingsymbol} onChange={handleChange} className="form-control" placeholder="Tradingsymbol" />
                </div>
                <div className="col-md-4">
                  <input name="symbolToken" value={formData.symbolToken} onChange={handleChange} className="form-control" placeholder="Symbol Token" />
                </div>
                <div className="col-md-4">
                  <select name="transactionType" value={formData.transactionType} onChange={handleChange} className="form-select">
                    <option>BUY</option>
                    <option>SELL</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <input value="NFO" className="form-control" readOnly />
                </div>
                <div className="col-md-4">
                  <select name="orderType" value={formData.orderType} onChange={handleChange} className="form-select">
                    <option>MARKET</option>
                    <option>LIMIT</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select name="productType" value={formData.productType} onChange={handleChange} className="form-select">
                    <option>INTRADAY</option>
                    <option>DELIVERY</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <select name="duration" value={formData.duration} onChange={handleChange} className="form-select">
                    <option>DAY</option>
                    <option>IOC</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" className="form-control" placeholder="Quantity" />
                </div>
                <div className="col-md-4">
                  <input name="price" value={formData.price} onChange={handleChange} className="form-control" placeholder="Price (for LIMIT)" />
                </div>
              </div>

              <div className="mt-4 text-end">
                <button
                  onClick={handleTrade}
                  className="btn btn-primary"
                >
                  🚀 Execute Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default SelectUserSegment
