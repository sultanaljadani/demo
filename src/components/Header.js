import React , {useState, useContext} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import ShoppingCard from './svg/shopping-cart-solid.svg'
import HeaderLogo from '../img/techshoplogo.png'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "100%"
    }
    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30"/>
            </div>
                <div className="logo">
                        <h1>
                            <Link to="/products">
                                <img src={HeaderLogo} alt="" height="70"/>
                            </Link>
                        </h1>
                </div>
            <ul style={styleMenu}>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>                
                <li>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={ShoppingCard} alt="" width="30" title="Cart" />
                </Link>
            </div>
      </header>
    )
}
