import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function TradeExecutionTopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/admin/trade-execution/option-chain" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Option Chain
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/trade-execution/select-user-segment" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Select User Segment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/trade-execution/quantity" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Quantity
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/trade-execution/market" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Market
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/trade-execution/place-order" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Place Order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TradeExecutionTopNavbar
