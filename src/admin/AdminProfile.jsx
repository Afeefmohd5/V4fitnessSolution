import React, { useState } from 'react'
import './AdminProfile.css'
import AdminLayout from './AdminLayout'

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileSave = (e) => {
    e.preventDefault()

    if (profile.password !== profile.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    const updatedProfile = {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      password: profile.password ? '********' : '(unchanged)',
    }

    alert('Profile saved:\n' + JSON.stringify(updatedProfile, null, 2))
  }

  return (
    <AdminLayout>
      <div className="admin-profile container my-5 p-4 rounded shadow bg-light">
        <h3 className="text-center mb-4">Admin Profile</h3>
        <form onSubmit={handleProfileSave}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={profile.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={profile.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={profile.password}
                onChange={handleInputChange}
                placeholder="Enter new password"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                value={profile.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Save Changes</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default AdminProfile
