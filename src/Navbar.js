import React, { useEffect, useState } from 'react';
import './Style/Navbar.css';
import LocationIcon from './Image/Header/Icon/Location-Icon.png';

import navbarData from './NavbarData';


const Navbar = () => {

  function NavbarOptions() {
    const navbaroptions = navbarData.map(item => {
      const items =
        <div className='navbar-options' >

          {item.id <= 5 && <img src={item.iconPath}></img>}
          <span >{item.title}</span>
        </div>

      return (
        <div className={(item.id === 0 || item.id === 5) ? 'like-navbar' : ''} key={item.id}>
          {items}
          {(item.id === 0 || item.id === 5) && <span className="paipe"> | </span>}
        </div>
      )
    })
    return navbaroptions
  }

  return (
    <div className='navbar'>
      <div className='navbar-options'>
        <NavbarOptions />
      </div>
      <div className='location'>
        <button>
          <p>get location from data and palace here</p>
          <img src={LocationIcon}></img>
        </button>
      </div>
    </div >
  )
}

export default Navbar;