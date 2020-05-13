import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
    return (
        <nav className='nav'>
            Logo
            <ul className='nav-link'>
                <li>
                    Shop
                </li>
                <li>
                    My Cart
                </li>
                <li>
                        <FontAwesomeIcon icon={faShoppingCart} />
                </li>
            </ul>
        </nav>
    )
}