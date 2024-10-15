import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className='mobile-app' id='mobile-app'>
        <p>For Better Experiencece Dowmload <br /> Restaurent App</p>
        <div className="app-img">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default MobileApp
