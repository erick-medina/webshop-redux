import React, {useState, useEffect} from "react";
import ProductListItem from "./ProductListItem";
import {Filter} from "./Filter";
import {connect} from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {Basket} from "./Basket";

function ProductsList(props) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('http://localhost:8000/products');
        const response = await data.json();
        console.log(response);

        setProducts(response);
        setFilteredProducts(response);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // const {id, title, sku, availableSizes, price} = products;

    const handleAddToCart = (e, product) => {
        const cartItems = e.cartItems;
        setCartItems(cartItems);
        let productAlreadyInCart = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                productAlreadyInCart = true;
                item.count++;
            }
        });
        if(!productAlreadyInCart) {
            cartItems.push({...product, count: 1})
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    return (
        <div>
            <Filter count={filteredProducts.length}/>
            <ProductListItem products={filteredProducts} handleAddToCart={handleAddToCart} />
            {/*<CartReducer />*/}
            <Basket cartItems={cartItems}  />
        </div>
    )
}

export default ProductsList;


/*
// what actions to pass to our component on props

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ProductsList); // connect returns a function. That function then calls our component*/
