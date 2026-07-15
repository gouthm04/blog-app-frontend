import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/create">BlogApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/create">Create Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewall">View All Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewmypost">My Posts</Link>
            </li>
          </ul>
          <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
