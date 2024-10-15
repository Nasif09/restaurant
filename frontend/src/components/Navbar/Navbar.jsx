import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css';
import {assets} from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
    const { cartTotal } = useContext(StoreContext);
    const [menu, setmenu] = useState("home");

  return (
    <div className='navbar' id='nav'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link onClick={()=>setmenu('home')} onMouseOver={()=> setmenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onMouseOver={()=> setmenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#mobile-app" onMouseOver={()=> setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>
        <a href="#footer" onMouseOver={()=> setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img className="search-logo" src={assets.search_icon} alt="" />
        <div className="assets-basket-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={ cartTotal() ? "dot" : ""}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
