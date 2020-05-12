import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to='/'>Logo</Link>
            <ul className='nav-link'>
                <li>
                    <Link to='/'>Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>My Cart</Link>
                </li>
                <li>
                    <Link to=''>
                        <FontAwesomeIcon icon={faShoppingCart} /></Link>
                </li>
            </ul>
        </nav>
    )
}