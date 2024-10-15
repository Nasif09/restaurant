import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";

import './Cart.css'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, removeCart, cartTotal } = useContext(StoreContext);
    const navigate = useNavigate();

     console.log("This is Cart", cartItems);
    return (
        <div className='cart'>
            <div className="cart-contain">
                <div className="cart-title-items">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br /><hr />

                <div className="cart-items">
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div><div className='cart-title-items cart-items'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeCart(item._id)} className='cross'>X</p>
                                </div>
                                    <hr />
                                </div>
                            )
                        }
                    })}
                </div>

                <div className="cart-container-bottom">
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
                                <p>${cartTotal()===0 ? 0 : cartTotal()+60}</p>
                            </div>
                        </div>
                        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                    </div>
                    
                    <div className="promocode">
                        <div>
                            <p>If you have a promo code, Enter it here.</p>
                            <div className="promocode-input">
                                <input type="text" name="" id="" placeholder='promo code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

