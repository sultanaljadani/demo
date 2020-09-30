import React, { useContext, useState} from 'react'
import {DataContext} from '../DataProvider'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart
    const [total, setToltal] = useState(0)
    return (
        <div>
             {
                 cart.map(product => (
                    <div className="item">
                        <div className="cart" key={product._id}>
                            <img src={product.images[0]} alt="Product01"/>
                                <div className="box">
                                    <h2 title={product.title}>{product.title}</h2>
                                    <h3>${product.price}</h3>
                                        <div className="amount">
                                            <button>  <FontAwesomeIcon  icon={faPlus}/> </button>
                                            <span>{product.count}</span>
                                            <button>  <FontAwesomeIcon  icon={faMinus}/> </button>
                                        </div>
                                            <div className="delete"> <FontAwesomeIcon  icon={faTimes}/> </div>
                                </div> 
                        </div>
                    </div> 
                 ))
             }
             <div className="total"> 
                <Link to="/Payment" > Payment</Link>
                <h3> Total : ${total}</h3>
             </div>
        </div>
    )
}