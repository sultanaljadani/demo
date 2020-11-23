import React, { useState, useEffect } from "react";
import styles from './Cart.css'
import CartItem from './CartItem/CartItem';
// import { Link } from 'react-router-dom'
import { connect } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
// import { DeleteOutlined } from '@ant-design/icons';
// import { Tag } from 'antd';

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
  
    return (
        <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
            Checkout
          </button>
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