import React ,{useContext} from 'react'
import { Layout, Menu, Badge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {DataContext} from '../DataProvider'
import { ShoppingOutlined } from '@ant-design/icons';
import Products from '../Products/Products'
import ProductDetiles from '../../components/Products/ProductDetiles/ProductDetiles'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Cart from '../Cart/Cart'
import ProductsMangment from '../Products/ProductsMangment/ProductsMangment'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './MasterLayout.css'
export default function MasterLayout() {
    const { Header, Content, Footer } = Layout;
    const value = useContext(DataContext)
    const [cart] = value.cart
    const { SubMenu } = Menu;
    return (
        <div>
            <Router>
            <Layout className="layout">
                <Header>
                    <div className="logo">
                        <a title="Home Page" href="/products">
                            <h2 style={{color: "white"}}>TECHSHOP</h2>
                        </a>
                    </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <SubMenu key="SubMenu" title="Store">
                                <Menu.Item key="1"><Link to="/products">Products</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/productsMangment">Products Mangment</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                        </Menu>
                    <div>
                        <Link to="/cart">
                            <Badge count={cart.length} >
                            <ShoppingOutlined style={{fontSize: '35px'}}/>
                            </Badge>
                        </Link>
                    </div>
                </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Route path="/Products" component={Products} />
                            <Route path="/productDetiles/:id" component={ProductDetiles} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/About" component={About} />
                            <Route path="/Cart" component={Cart} />
                            <Route path="/ProductsMangment" component={ProductsMangment} />
                        </div>
                    </Content>
                <Footer style={{ textAlign: 'center'}}>
                Made by <FontAwesomeIcon className="faheart" icon={faHeart}/>
                <a href="/products">  TECHSHOP.com </a>
                </Footer>
            </Layout>
            </Router>
        </div>
    )
}