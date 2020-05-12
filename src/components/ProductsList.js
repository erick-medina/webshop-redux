import React, {useState, useEffect} from "react";
import ProductListItem from "./ProductListItem";
import {Filter} from "./Filter";

export function ProductsList(props) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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

    return (
        <div>
            <Filter count={filteredProducts.length}/>
            <ProductListItem products={filteredProducts} />
        </div>
    )
}