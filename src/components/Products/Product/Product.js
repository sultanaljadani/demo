import React from "react";
import { Link } from "react-router-dom";
import {Card,  Button } from 'antd'
import {VatText, PriceText} from '../../../styled'
import '../Products.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../redux/Shopping/shopping-actions";
const { Meta } = Card;
const gridStyle = {
    width: '80%',
    height: '80%',
    maxHeight: '340px',
    display: 'block',
    objectFit: 'cover'
  };
const Product = ({ product, addToCart , loadCurrentItem }) => {
  return (
    <>
                <Card
                    key={product._id}
                    hoverable
                    style={{ width: 'auto'}}
                    cover={
                        <Link to={`/productDetiles/${product.id}`}>
                            <img alt="example" src={product.images[0]}  style={gridStyle} onClick={() => loadCurrentItem(product)}/>
                        </Link>
                        }>
                            <Meta title={product.title} style={{textTransform: 'uppercase', letterSpacing: '2px'}}/>
                            <Meta description={product.description} /><br/>
                            <PriceText> <small>SR</small>{product.price} </PriceText>
                            <VatText>inclusive of VAT</VatText>
                            <Button type="primary" onClick={() => addToCart(product.id)} block>
                                <ShoppingCartOutlined /> Add to card
                            </Button>                            
                </Card>
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatch)(Product);