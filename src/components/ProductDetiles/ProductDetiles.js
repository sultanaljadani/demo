import React from 'react'
import { PageHeader, Tag, Button} from 'antd';
import './ProductDetiles.css'
import {VatText, PriceText} from '../../styled'
import { connect } from "react-redux";



const ProductDetiles = ({ productDetiles }) => {
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
                 productDetiles.map(item => (
                     <div className="products" key={item._id}>
                     <div className="details" key={item._id}>
                            <img src={item.images[0]} alt="Product01"/>
                         <div className="box">
                             <h2 title={item.title}>{item.title}</h2>
                             <p>{item.description}</p>
                             <PriceText> <small>SR</small>{item.price} </PriceText>
                             <VatText>inclusive of VAT</VatText>
                             <Button type="primary" onClick={() => addCart(item._id)} block>
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
const mapState = (state) => {
    return {
        productDetiles: state.shop.products,
    };
  };
  export default connect(mapState)(productDetiles);