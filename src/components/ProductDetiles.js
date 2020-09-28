import React, { useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function ProductDetiles({match}) {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const productDetiles = products.filter((product) => {
        return product._id === id 
    } )
    console.log(productDetiles)
    return (
        <div>
             {
                 productDetiles.map(product => (
                     <div className="products" key={product._id}>
                     <div className="details" key={product._id}>
                            <img src={product.images[0]} alt="Product01"/>
                         <div className="box">
                             <h2 title={product.title}>{product.title}</h2>
                             <h3>${product.price}</h3>
                             <p>{product.description}</p>
                             <button className="cart" onClick={() => addCart(product._id)}> 
                                Add to card
                            </button>
                         </div>
                         
                     </div>
                     </div>
                 ))
             }
        </div>
    )
}