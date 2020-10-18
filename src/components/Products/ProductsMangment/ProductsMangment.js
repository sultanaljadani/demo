import { Button } from 'antd'
import React from 'react'
import NewProduct from '../NewProduct/NewProduct'
import DeleteProduct from '../DeleteProduct/DeleteProduct'
import CodeDiscountProduct from '../CodeDiscountProduct/CodeDiscountProduct'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Card, Col, Row } from 'antd'
import {PlusOutlined , DeleteOutlined , BarcodeOutlined} from '@ant-design/icons';

export default function ProductsMangment() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> Products Managment</h1>
            <Router>
            <Route path="/NewProduct" component={NewProduct} />
            <Route path="/DeleteProduct" component={DeleteProduct} />
            <Route path="/CodeDiscountProduct" component={CodeDiscountProduct} />
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Add New Product" bordered={false}>
                            <Button type="primary"><Link to="/NewProduct"><PlusOutlined /> New Product</Link></Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Delete Product" bordered={false}>
                            <Button danger><Link to="/DeleteProduct"><DeleteOutlined /> Delete Product</Link></Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Add Code Discount" bordered={false}>
                        <Button type="ghost"><Link to="/CodeDiscountProduct"><BarcodeOutlined /> Add Code</Link></Button>
                        </Card>
                    </Col>
                </Row>
            </Router>
        </div>
    )
}
