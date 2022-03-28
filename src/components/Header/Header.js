import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <div className="container">
          <Link className="navbar-brand" to="/home"><h2 className='hero-title'>Friends-Riders</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item m-3">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item m-3">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item m-3">
                <Link className="nav-link" to="/destination">Destination</Link>
              </li>

              <li className="nav-item m-3">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item m-3">
                <span style={{color: "red"}}>{user.displayName}</span>
              </li>

              {user.email ? <li className="nav-item m-3">  <span><button className='btn btn-outline-danger' onClick={logOut}>Logout</button></span>  </li>:<li className="nav-item m-3">
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;