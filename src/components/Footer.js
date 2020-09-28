import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <footer>
            <div className="footer-copyright">Made by <FontAwesomeIcon className="faheart" icon={faHeart}/>
                <a href="/products">  TECHSHOP.com </a>
                    {/* <FontAwesomeIcon icon={faTwitter}/>                 */}
            </div>
        </footer>
    )
}
