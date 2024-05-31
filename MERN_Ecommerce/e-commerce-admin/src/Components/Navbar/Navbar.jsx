import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
<img   src={navlogo} alt="logo" style={{ borderRadius: '50%', width: '100px', height: '100px' }}/>
        <p className="logoo">ArtisanaT</p>      
        <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
