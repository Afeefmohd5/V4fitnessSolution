import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserHome.css'

function UserHome() {
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
    <div className="user-home container my-5">
      <header className="carousel-header">
        <h1>Welcome to V4 Fitness Solution</h1>
        <div className="tagline-carousel">
          <p>{taglines[currentIndex]}</p>
          <div className="carousel-controls">
            <button className="btn btn-outline-light me-2" onClick={prevTagline}>Previous</button>
            <button className="btn btn-outline-light" onClick={nextTagline}>Next</button>
          </div>
        </div>
      </header>

      <section className="section">
        <h2>About V4 Fitness Solution</h2>
        <p>
          V4 Fitness Solution is dedicated to providing cutting-edge tools and resources to help traders succeed in the stock market.
          Our platform combines advanced analytics, real-time data, and user-friendly interfaces to empower traders of all levels.
        </p>
      </section>

      <section className="section">
        <h3>Our Goals</h3>
        <ul>
          <li>Deliver reliable and innovative trading tools</li>
          <li>Enhance user experience with intuitive design</li>
          <li>Provide comprehensive market insights and analytics</li>
          <li>Support traders with excellent customer service</li>
        </ul>
      </section>

      <section className="section">
        <h3>Our Mission</h3>
        <p>
          To empower traders worldwide by providing accessible, reliable, and innovative trading solutions that drive success and confidence.
        </p>
      </section>

      <section className="section">
        <h3>Our Vision</h3>
        <p>
          To be the leading platform for stock market trading solutions, recognized for innovation, reliability, and customer satisfaction.
        </p>
      </section>

      <section className="testimonials section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <blockquote className="testimonial">
            <p>"V4 Fitness Solution transformed my trading experience with their reliable platform and excellent support."</p>
            <footer>- Happy Trader</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"The subscription plans are affordable and packed with great features. Highly recommended!"</p>
            <footer>- Satisfied Customer</footer>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <h2>Subscription Plans</h2>
        <div className="subscription-cards">
          <div className="subscription-card basic">
            <h3>Basic Plan</h3>
            <p>Access to essential trading tools and market data.</p>
            <p className="price">$19.99 / month</p>
            <button className="btn btn-primary w-100">Subscribe</button>
          </div>
          <div className="subscription-card pro">
            <h3>Pro Plan</h3>
            <p>Advanced analytics, real-time alerts, and priority support.</p>
            <p className="price">$49.99 / month</p>
            <button className="btn btn-primary w-100">Subscribe</button>
          </div>
          <div className="subscription-card enterprise">
            <h3>Enterprise Plan</h3>
            <p>Custom solutions tailored for large trading firms.</p>
            <p className="price">Contact Us</p>
            <button className="btn btn-outline-primary w-100">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserHome
