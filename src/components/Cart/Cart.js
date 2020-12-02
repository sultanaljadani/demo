import React, { useState, useEffect } from "react";
import './Cart.css'
import CartItem from './CartItem/CartItem';
import {VatText} from '../../styled'
import { connect } from "react-redux";
import { Button } from 'antd';

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
      
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    if(cart.length === 0)
        return <h2  className="cart-alert">Cart is Empty</h2>
  
    return (
        <div className="cart">
        <div className="cart__items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Cart Summary</h4>
          <div className="summary__price">
            <span>TOTAL: ({totalItems} items)<br/><VatText>inclusive of VAT</VatText> </span> 
            <span>$ {totalPrice}</span>
          </div>
          <Button className="summary__checkoutBtn" type="primary">
            Checkout
          </Button>
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Cart);