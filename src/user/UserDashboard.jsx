import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './UserDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserNavbar from './UserNavbar.jsx'
import './UserNavbar.css'
import UserFooter from './UserFooter.jsx'
import './UserFooter.css'

function UserDashboard() {
  const taglines = [
    "Empowering your stock market trading journey with innovative solutions",
    "Your trusted partner in stock market trading solutions.",
    "Innovative tools to empower your trading journey.",
    "Maximize your investment potential with us."
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTagline = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? taglines.length - 1 : prevIndex - 1))
  }

  const nextTagline = () => {
    setCurrentIndex((prevIndex) => (prevIndex === taglines.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </>
  )
}

export default UserDashboard
