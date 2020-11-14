import React from "react";
import { connect } from "react-redux";
import {Row, Col, Carousel, Divider, Pagination} from 'antd'
import {StyleImg} from '../../styled'
import Product from "./Product/Product";
const Products = ({ products }) => {
  return (
    <>
      <div>
          <Carousel autoplay effect="fade">
            <div>
              <StyleImg alt="" src="https://www.jarir.com/media/wysiwyg/Saudi/MB/MB-ksa-1010-nvidia-laptops-en.jpg" />
            </div>
            <div>
              <StyleImg alt="" src="https://www.jarir.com/media/wysiwyg/Saudi/MB/MB-ksa-1410-iphone12-pro-cs-en.jpg"/>
            </div>
            <div>
              <StyleImg alt="" src="https://www.jarir.com/media/wysiwyg/Saudi/MB/MB-ksa-1410-iphone12-cs-en.jpg" />
            </div>
            <div>
              <StyleImg alt="" src="https://www.jarir.com/media/wysiwyg/Saudi/MB/MB-ksa-0610-oppo-reno4-pro-5g-new-en.jpg" />
            </div>
            <div>
              <StyleImg alt="" src="https://www.jarir.com/media/wysiwyg/Saudi/MB/MB-ksa-2209-xbox-pre-order-en.jpg" />
            </div>
          </Carousel>
      </div>
      <Divider>SPECIAL OFFER</Divider>
      <div>
        <Row align="middle" justify="space-around"  gutter="horizt">
          { products.map((product) => ( 
            <Col span={6} key={product._id} style={{padding: '15px'}}>
              <Product key={product.id} product={product}/> 
            </Col>) ) }
        </Row>
      </div>
      <div className="center">
            <Pagination 
              defaultCurrent={1} 
              total={8} 
              defaultPageSize={10} 
              pageSize={4}/>
          </div>
    </>
  );
};

const mapState = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapState)(Products);