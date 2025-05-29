import React, { useContext, useState } from 'react'
import UserManagementTopNavbar from './UserManagementTopNavbar'
import AdminLayout from './AdminLayout'
import { SubscriptionContext } from './SubscriptionContext'
import { jsPDF } from 'jspdf'

function ManageSubscriptionsForm({ onClose }) {
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
    if (onClose) onClose()
  }

  return (
    <div className="card p-3 mb-4">
      <h3>Manage Subscriptions</h3>
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
  )
}

function CreateUpdateSubscription() {
  const { subscriptions, deleteSubscription } = useContext(SubscriptionContext)
  const [showManageForm, setShowManageForm] = useState(false)
  const [selectedSubs, setSelectedSubs] = useState([])

  const toggleSelect = (index) => {
    setSelectedSubs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const generateSelectedInvoicePDF = () => {
    if (selectedSubs.length === 0) {
      alert('Please select at least one subscription to generate invoice.')
      return
    }
    try {
      const doc = new jsPDF()
      doc.setFontSize(18)
      doc.text('Invoice', 14, 22)
      doc.setFontSize(12)
      let y = 40
      selectedSubs.forEach((index, i) => {
        const sub = subscriptions[index]
        doc.text(`Subscription #${i + 1}`, 14, y)
        y += 8
        doc.text(`Name: ${sub.name}`, 14, y)
        y += 8
        doc.text(`Email: ${sub.email}`, 14, y)
        y += 8
        doc.text(`Number: ${sub.number}`, 14, y)
        y += 8
        doc.text(`Duration: ${sub.duration}`, 14, y)
        y += 12
      })
      doc.save('invoice.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF invoice.')
    }
  }

  return (
    <AdminLayout>
      <UserManagementTopNavbar />

      <div className="container-fluid my-4">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 bg-light p-3 rounded">
            <h5 className="mb-3">Sigsync</h5>
            <nav className="nav flex-column">
              <a
                href="#"
                className={`nav-link ${showManageForm ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setShowManageForm(true)
                }}
              >
                Manage Subscriptions
              </a>
              {/* Removed Invoices link */}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="col-md-9 bg-white p-4 rounded shadow-sm">
            {showManageForm ? (
              <ManageSubscriptionsForm onClose={() => setShowManageForm(false)} />
            ) : (
              <>
                <h2 className="mb-4">Subscription Details</h2>

                {/* Button to generate PDF for selected subscriptions */}
                <button className="btn btn-primary mb-3" onClick={generateSelectedInvoicePDF}>
                  Generate PDF Invoices for Selected
                </button>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Subscription Duration</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptions.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">No subscriptions found.</td>
                        </tr>
                      ) : (
                        subscriptions.map((sub, index) => (
                          <tr key={index}>
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedSubs.includes(index)}
                                onChange={() => toggleSelect(index)}
                              />
                            </td>
                            <td>{sub.name}</td>
                            <td>{sub.email}</td>
                            <td>{sub.number}</td>
                            <td>{sub.duration}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteSubscription(index)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </AdminLayout>
  )
}

export default CreateUpdateSubscription
