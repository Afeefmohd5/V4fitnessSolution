import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Frontend-only login logic with hardcoded users
    const users = [
      { username: 'user1', password: 'password1', role: 'user' },
      { username: 'admin1', password: 'password2', role: 'admin' },
    ]

    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    )

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/user')
      }
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>V4 Fitness Solution</h2>
          <p>Please login to continue</p>
        </div>
        {error && <div className="alert-danger login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="login-label">Username</label>
            <input
              type="text"
              id="username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Password</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="login-label">Select Role</label>
            <select
              id="role"
              className="login-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
