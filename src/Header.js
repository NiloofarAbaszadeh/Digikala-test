import React from "react";
import MainHeader from "./Image/Header/MainHeader.jpg"
import Logo from './Image/logo.svg'
import UserIcon from "./Image/Header/Icon/User-Icon.png"
import ShoppingIcon from "./Image/Header/Icon/Sopping-Icon.png"
import SearchIcon from "./Image/Header/Icon/search-icon.svg"
import './Style/Header.css';

const Header = () => {
  const FirstHeader = () => {

    return (
      <div className="first-header-container">
        <img className="first-header" src={MainHeader}></img>
      </div>
    )
  }

  const SecondHeader = () => {
    const name = 0;
    return (
      <div className="second-header">
        <div className="second-header-right">
          <div className="search-box">
            <a href="https://www.digikala.com/">
              <img src={Logo} alt="digikala-logo" className="header-right-logo"></img>
            </a>
            <button className="search-button">
              <img src={SearchIcon} />
            </button>
            <input type="text" placeholder="جستجو" className="search-box-input"></input>
          </div>
        </div>
        <div className="second-header-left">
          <div className="user-Shooping">
            <button className="user-icon-button">
              <img src={UserIcon} ></img>
            </button>
            <span className="paipe"> | </span>
            <button className="shopping-icon-button">
              <img src={ShoppingIcon} className="shopping-icon"></img>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-header">
      <FirstHeader />
      <SecondHeader />
    </div>
  )
}

export default Header;

