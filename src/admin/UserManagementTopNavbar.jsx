import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function UserManagementTopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">User Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#userManagementNavbar" aria-controls="userManagementNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="userManagementNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/admin/create-update-subscription" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Create/Update User Subscription
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/segment-creation" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Segment Creation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/add-user-segment" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Add User in Segment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/see-all-users" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                See All Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default UserManagementTopNavbar
