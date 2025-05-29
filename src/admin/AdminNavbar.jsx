import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './AdminNavbar.css'

function AdminNavbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear localStorage and sessionStorage to log out user
    localStorage.clear()
    sessionStorage.clear()
    // Navigate to login page at "/"
    navigate('/')
  }

  return (
    <nav className="admin-sidebar d-flex flex-column p-3 bg-light vh-100">
      <a href="#" className="admin-sidebar-brand mb-4 fs-4 fw-bold text-center">
        Admin Portal
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/admin/users" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            User Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/profile" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            Admin Profile Setting
          </NavLink>
        </li>
      
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            id="tradingPortalDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Main Trading Portal
          </a>
          <ul className="dropdown-menu" aria-labelledby="tradingPortalDropdown">
            <li><NavLink to="/admin/current-trade-logs" className="dropdown-item">Current Trade logs</NavLink></li>
            <li><NavLink to="/admin/past-trade-logs" className="dropdown-item">Past Trade logs</NavLink></li>
            <li><NavLink to="/admin/trade-execution" className="dropdown-item">Trade execution</NavLink></li>
          </ul>
        </li>
      </ul>
      <button
        className="btn btn-danger w-100 mt-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default AdminNavbar
