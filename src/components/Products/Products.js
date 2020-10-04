import React, { useContext } from 'react'
import './Products.css'
import {DataContext} from '../DataProvider'
import {Link} from 'react-router-dom'
import ProductsFilter from './ProductsFilter/ProductsFilter'

export default function Products() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart
    return (
        <div className="products">
          <ProductsFilter />
          {
            products.map(product => (
              <div className="card" key={product._id}>
                <Link to={`/productDetiles/${product._id}`}>
                  <img src={product.images[0]} alt="Product01"/>
                </Link>
                <div className="box">
                  <h3 title={product.title}>
                    <Link to={`/productDetiles/${product._id}`} >{product.title}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price}</h4>
                  <button onClick={() => addCart(product._id)}>
                    Add to card
                  </button>
                </div>
              </div>
            ))
          }
         
        </div>
        
    )
}
