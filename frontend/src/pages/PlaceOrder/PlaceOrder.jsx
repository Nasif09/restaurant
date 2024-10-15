import React, { useContext } from 'react'

import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { cartTotal } = useContext(StoreContext);

  return (
    <div className="placeOrder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="total-cart">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subttal</p>
              <p>${cartTotal()}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Delivery Feep</p>
              <p>${cartTotal()===0 ? 0 : 60}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${cartTotal()===0 ? 0 : cartTotal() + 60}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder
