import React, { useState } from "react";
import styles from "./CartItem.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons';
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="details-cart" key={item.id}>
      <div className="img-cart">
        <Link to={`/productDetiles/${item.id}`}>
          <img
            className={styles.cartItem__image}
            src={item.images}
            alt={item.title}
          />
        </Link>
      </div>
      
      <div className="box-details-cart">
        <h2 title={item.title}>{item.title}</h2>
        <h3>$ {item.price}</h3>
        <p>{item.description}</p>
      </div>
      <div className="cartItem__actions">
          <div className="cartItem__qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
      </div>
      <div className="box-delete-cart">
          <div className="delete-cart" onClick={() => removeFromCart(item.id)} title="Delete product">
            <DeleteOutlined style={{fontSize:"20px"}}/>
          </div>
        </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);