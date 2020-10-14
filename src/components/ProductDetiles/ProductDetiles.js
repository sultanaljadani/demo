import React, { useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from '../DataProvider'
import { PageHeader, Tag, Button} from 'antd';
import './ProductDetiles.css'
import {VatText, PriceText} from '../../styled'


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
        <>
            <PageHeader
                 className="site-page-header"
                 onBack={() => window.history.back()}
                 title="Back"
                 subTitle="Mobile Detils"
                 tags={<Tag color="blue">info</Tag>}
                />
             {
                 productDetiles.map(product => (
                     <div className="products" key={product._id}>
                     <div className="details" key={product._id}>
                            <img src={product.images[0]} alt="Product01"/>
                         <div className="box">
                             <h2 title={product.title}>{product.title}</h2>
                             <p>{product.description}</p>
                             <PriceText> <small>SR</small>{product.price} </PriceText>
                             <VatText>inclusive of VAT</VatText>
                             <Button type="primary" onClick={() => addCart(product._id)} block>
                          Add to card
                        </Button>
                         </div>
                         
                     </div>
                     </div>
                 ))
             }
        </>
    )
}