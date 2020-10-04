import React, { useContext, useEffect, useState} from 'react'
import {DataContext} from '../DataProvider'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
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
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    if(cart.length === 0)
        return <h2 style={{textAlign: "center"}}>Cart Empty</h2>
    return (
                <>
                   {
                       cart.map(product =>(
                           <div className="details-cart" key={product._id}>
                               <div className="img-cart">
                                    <img src={product.images[0]} alt="Product01"/>
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
                                    <div className="delete-cart" onClick={() => removeProduct(product._id)}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </div>
                               </div>
                           </div>
                       ))
                   }
                   <div className="total-cart">
                       <Link to="/payment">Payment</Link>
                       <h3>Total: $ {total}</h3>
                   </div>
                </>
            )
        }