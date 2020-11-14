// import React, { useState, useEffect } from "react";
// import './Cart.css'
// import { Link } from 'react-router-dom'
// import { connect } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
// import { DeleteOutlined } from '@ant-design/icons';
// import { Tag } from 'antd';

// const Cart = ({ cart }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     let items = 0;
//     let price = 0;

//     cart.forEach((item) => {
//       items += item.qty;
//       price += item.qty * item.price;
//     });

//     setTotalItems(items);
//     setTotalPrice(price);
//   }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

//   return (
//     <div>
//         { cart.map((item) => (
//           <div className="details-cart" key={product._id}>
//           <div className="img-cart">
//           <Link to={`/productDetiles/${product._id}`}>
//                <img src={product.images[0]} alt="Product01"/>
//                </Link>
//           </div>
//            <div className="box-details-cart">
//                <h2 title={product.title}>{product.title}</h2>
//                <h3>${product.price}</h3>
//                <p>{product.description}</p>
//                <div className="amount-cart">
//                        <button className="count-cart" onClick={() => reduction(product._id)}>
//                        <FontAwesomeIcon icon={faMinus}/>
//                        </button>
//                            <span>{product.count}</span>
//                        <button className="count-cart" onClick={() => increase(product._id)}>
//                        <FontAwesomeIcon icon={faPlus}/>
//                        </button>
//                    </div>
//            </div>
//           <div className="box-delete-cart">
//                <div className="delete-cart" onClick={() => removeProduct(product._id)} title="Delete product">
//                    <DeleteOutlined style={{fontSize:"20px"}}/>
//                </div>
//           </div>
//       </div>
//     ))
// };
//     <div className="total-cart">
//         <Link to="/checkout">Checkout</Link>
//         <h3>Total: $ <Tag color="red" style={{textAlign: "center"}}>{total}</Tag></h3>
//     </div>
//  </div> );
// };

// const mapStateToProps = (state) => {
//   return {
//     cart: state.shop.cart,
//   };
// };

// export default connect(mapStateToProps)(Cart);