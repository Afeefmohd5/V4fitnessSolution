import React, { useContext } from 'react'
import AdminLayout from './AdminLayout'
import { TradeContext } from './TradeContext'

function PlaceOrder() {
  const { tradeOrder } = useContext(TradeContext)

  const handlePayment = () => {
    alert('Payment integration coming soon for order:\n' + JSON.stringify(tradeOrder, null, 2))
  }

  return (
    <AdminLayout>
      <div className="container my-4">
        <h2>Place Order</h2>
        {tradeOrder ? (
          <div className="card p-3">
            <h4>Order Details</h4>
            <table className="table">
              <tbody>
                {Object.entries(tradeOrder).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value !== null && value !== undefined ? value.toString() : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={handlePayment}>
              Proceed to Payment
            </button>
          </div>
        ) : (
          <p>No order data available. Please place a trade from Select User Segment.</p>
        )}
      </div>
    </AdminLayout>
  )
}

export default PlaceOrder
