import { NavLink, useNavigate } from 'react-router-dom'

function UserNavbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear auth tokens)
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm py-3">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">
        <a className="navbar-brand fw-bold fs-3" href="#">V4 Fitness Solution</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-4 fs-5">
            <li className="nav-item">
              <NavLink to="" className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="edit-profile" className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
                Edit Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="configure-broker" className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
                Configure Broker Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="access-trading" className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
                Access Trading
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger ms-3 px-4 py-2 rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar
