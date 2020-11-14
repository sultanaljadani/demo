import React, { useContext, useEffect, useState} from 'react'
import {DataContext} from '../DataProvider'
import './Cart.css'
import { Link } from 'react-router-dom'
export default function Checkout() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart
    const [total, setToltal] = useState(0)
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
                                    <div className="amount-cart">
                                               Q : <span>{product.count}</span>
                                        </div>
                                </div>
                           </div>
                       ))
                   }
                   <div className="total-cart">
                       <h3>Total: $ {total}</h3>
                   </div>
                </>
            )
        }