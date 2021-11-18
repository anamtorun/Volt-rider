import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import useFirebase from '../../../hooks/useFirebase';
import './Navbar.css';

const Navbar = () => {
  const {user, logOut} = useFirebase();
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to='/home'><img className='main-logo' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/bikes'>Bikes</Link>
        </li>
        <li className="nav-item">
          <Link to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/help'>Help</Link>
        </li>
        <li className="nav-item">
          {user.email && <Link to='/dashboard'>Dashboard</Link>}
        </li>
        <li className="nav-item">
          {user.email ? <button onClick={logOut} style={{marginLeft: '70px'}} className='common-btn'>Logout</button> :
            <Link to='/login'>Login</Link>}
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;