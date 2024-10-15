import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id="footer"> 
      <div className="footer-container">
        <div className="footer-left">
            <a href='#nav'><img src={assets.logo} alt="" /></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, molestias!</p>
            <div className="social-media-icon">
                <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>01798552909</li>
                <li>restaurent@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='copyright'>Copyright 2024 ©Restaurent -All Right Reserved.</p>
    </div>
  )
}

export default Footer
