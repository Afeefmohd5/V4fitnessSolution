import React, { useState, useContext } from 'react'
import AdminLayout from './AdminLayout'
import UserManagementTopNavbar from './UserManagementTopNavbar'
import { SubscriptionContext } from './SubscriptionContext'

function ManageSubscriptions() {
  const { addSubscription } = useContext(SubscriptionContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    duration: '1 month',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addSubscription(formData)
    setFormData({
      name: '',
      email: '',
      number: '',
      duration: '1 month',
    })
  }

  return (
    <AdminLayout>
      <UserManagementTopNavbar />
      <div className="container my-4">
        <h2>Manage Subscriptions</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="number" className="form-label">Number</label>
            <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="duration" className="form-label">Subscription Duration</label>
            <select id="duration" name="duration" className="form-select" value={formData.duration} onChange={handleChange}>
              <option value="1 month">1 Month</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default ManageSubscriptions
