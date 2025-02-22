import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-text'>
      <div className="header-contain">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experiense.Our mission is to satisfy your cravings and dining experience, one delicious meal at a time. </p>
        <a href='#explore-menu'><button>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
