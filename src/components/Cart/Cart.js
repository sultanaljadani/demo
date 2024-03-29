import React, { useContext, useEffect, useState} from 'react'
import {DataContext} from '../DataProvider'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { DeleteOutlined } from '@ant-design/icons';
import { Tag, message } from 'antd';

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart
    const [total, setToltal] = useState(0)
    useEffect(() =>{
        function getTotal() {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setToltal(res)
        }
        getTotal()
    },[cart])
    const reduction = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }
    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    message
                    .loading('in progress..', 1)
                    .then(() => message.success('The Product has been deleted !', 2.2))
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }else{
            message.error('The Product was not deleted !');
        }
    }
    if(cart.length === 0)
        return <h2  className="cart-alert">Cart is Empty</h2>
    return (
                <>
                   {
                       cart.map(product =>(
                           <div className="details-cart" key={product._id}>
                               <div className="img-cart">
                               <Link to={`/productDetiles/${product._id}`}>
                                    <img src={product.images[0]} alt="Product01"/>
                                    </Link>
                               </div>
                                <div className="box-details-cart">
                                    <h2 title={product.title}>{product.title}</h2>
                                    <h3>${product.price}</h3>
                                    <p>{product.description}</p>
                                    <div className="amount-cart">
                                            <button className="count-cart" onClick={() => reduction(product._id)}>
                                            <FontAwesomeIcon icon={faMinus}/>
                                            </button>
                                                <span>{product.count}</span>
                                            <button className="count-cart" onClick={() => increase(product._id)}>
                                            <FontAwesomeIcon icon={faPlus}/>
                                            </button>
                                        </div>
                                </div>
                               <div className="box-delete-cart">
                                    <div className="delete-cart" onClick={() => removeProduct(product._id)} title="Delete product">
                                        <DeleteOutlined style={{fontSize:"20px"}}/>
                                    </div>
                               </div>
                           </div>
                       ))
                   }
                   <div className="total-cart">
                       <Link to="/checkout">Checkout</Link>
                       <h3>Total: $ <Tag color="red" style={{textAlign: "center"}}>{total}</Tag></h3>
                   </div>
                </>
            )
        }