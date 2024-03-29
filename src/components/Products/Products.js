import React, { useContext } from 'react'
import './Products.css'
import {DataContext} from '../DataProvider'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Carousel, Divider ,Pagination , Button} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {VatText, PriceText, StyleImg} from '../../styled'
export default function Products() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart
  const { Meta } = Card;
  const gridStyle = {
    width: '80%',
    height: '80%',
    maxHeight: '340px',
    display: 'block',
    objectFit: 'cover'
  };
    return (
      <>
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
          <Divider>SPECIAL OFFER</Divider>
          <Row align="middle" justify="space-around"  gutter="horizt">
              {
                products.map(product => (
                  <Col span={6} key={product._id} style={{padding: '15px'}}>
                    <Card
                      key={product._id}
                      hoverable
                      style={{ width: 'auto'}}
                      cover={
                        <Link to={`/productDetiles/${product._id}`}>
                          <img alt="example" src={product.images[0]}  style={gridStyle}/>
                        </Link>
                      }
                      >
                        <Meta title={product.title} style={{textTransform: 'uppercase', letterSpacing: '2px'}}/>
                        <Meta description={product.description} /><br/>
                        <PriceText> <small>SR</small>{product.price} </PriceText>
                        <VatText>inclusive of VAT</VatText>
                        <Button type="primary" onClick={() => addCart(product._id)} block>
                        <ShoppingCartOutlined /> Add to card
                        </Button>
                    </Card>
                  </Col>
                ))
              }
          </Row>
          <div className="center">
            <Pagination 
              defaultCurrent={1} 
              total={8} 
              defaultPageSize={10} 
              pageSize={4}/>
          </div>
    </>  
    )
}