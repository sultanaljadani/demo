import React , { useState, useEffect } from 'react'
import { Layout, Menu, Badge  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingOutlined } from '@ant-design/icons';
import Products from '../Products/Products'
import ProductDetiles from '../ProductDetiles/ProductDetiles'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Cart from '../Cart/Cart'
import ProductsMangment from '../Products/ProductsMangment/ProductsMangment'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './MasterLayout.css'
import { connect } from "react-redux";
const MasterLayout = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

    const {Header, Content, Footer } = Layout;
    
    return (
        <div>
            <Router>
            <Layout className="layout">
                <Header theme="dark">
                    <div className="logo">
                        <a title="Home Page" href="/products">
                            <h2 style={{color: "white"}}>TECHSHOP</h2>
                        </a>
                    </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/products">Products</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/contact">Contact</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                        </Menu>
                    <div>
                        <Link to="/cart">
                            <Badge  count={cartCount}>
                            <ShoppingOutlined style={{fontSize: '35px'}} title="Cart"/>
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
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(MasterLayout);